import { render, screen, waitFor } from '@testing-library/react';
import Artist from './Artist';
import { vi } from 'vitest';
import useFetch from '~/shared/hooks/useFetch'; // Ensure this path is correct

// Mock react-router's useParams
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useParams: vi.fn(),
  };
});

// Mock the useFetch hook
vi.mock('~/shared/hooks/useFetch');

// Mock data
const mockArtist1 = {
  id: 1,
  name: 'The Cosmic Wave',
  bio: 'An indie rock band known for their ethereal soundscapes and introspective lyrics.',
  imageUrl: 'https://via.placeholder.com/400x400?text=The+Cosmic+Wave',
  albums: [
    { id: 101, name: 'Celestial Echoes', year: 2020, imageUrl: 'https://via.placeholder.com/200x200?text=Celestial+Echoes' },
    { id: 102, name: 'Nebula Dreams', year: 2022, imageUrl: 'https://via.placeholder.com/200x200?text=Nebula+Dreams' },
  ],
  topTracks: [
    { id: 1001, title: 'Starlight Serenade', albumId: 101, duration: '4:15' },
    { id: 1002, title: 'Lost in the Void', albumId: 101, duration: '3:50' },
  ],
};

const mockArtist2 = {
  id: 2,
  name: 'Aurora Bloom',
  bio: 'A solo synth-pop artist who blends retro vibes with modern electronic beats.',
  imageUrl: 'https://via.placeholder.com/400x400?text=Aurora+Bloom',
  albums: [
    { id: 201, name: 'Neon Skyline', year: 2021, imageUrl: 'https://via.placeholder.com/200x200?text=Neon+Skyline' }
  ],
  topTracks: [
    { id: 2001, title: 'City Lights', albumId: 201, duration: '3:45' }
  ]
};

const mockAllArtists = [mockArtist1, mockArtist2];

// Helper to get the mocked useParams
const mockedUseParams = vi.mocked(useParams);
const mockedUseFetch = vi.mocked(useFetch);

describe('Artist Page', () => {
  beforeEach(() => {
    // Reset mocks before each test
    mockedUseParams.mockReset();
    mockedUseFetch.mockReset();
  });

  it('shows loading state initially', () => {
    mockedUseParams.mockReturnValue({ artistId: '1' });
    // Simulate useFetch hook returning loading state
    mockedUseFetch.mockReturnValue([null, null, true]); 
    render(<Artist />);
    expect(screen.getByText(/loading artist details.../i)).toBeInTheDocument();
  });

  it('shows error message on fetch failure for all artists', async () => {
    mockedUseParams.mockReturnValue({ artistId: '1' });
    // Simulate useFetch hook returning an error
    mockedUseFetch.mockReturnValue([null, new Error('Failed to fetch artists'), false]);
    render(<Artist />);
    await waitFor(() => {
      // The component formats the error message, so we check for part of it.
      expect(screen.getByText(/error fetching artists: failed to fetch artists/i)).toBeInTheDocument();
    });
  });

  it('shows error message if artist is not found', async () => {
    mockedUseParams.mockReturnValue({ artistId: '3' }); // Non-existent artist ID
    // Simulate useFetch hook returning data successfully, but the artist ID won't be found
    mockedUseFetch.mockReturnValue([mockAllArtists, null, false]);
    render(<Artist />);
    await waitFor(() => {
      expect(screen.getByText(/artist with id 3 not found/i)).toBeInTheDocument();
    });
  });
  
  it('renders artist details on successful fetch for a specific artist', async () => {
    mockedUseParams.mockReturnValue({ artistId: '1' });
    // Simulate useFetch hook returning the list of all artists
    mockedUseFetch.mockReturnValue([mockAllArtists, null, false]);
    
    render(<Artist />);

    // Wait for the component to process the data and update
    await waitFor(() => {
      expect(screen.getByText(mockArtist1.name)).toBeInTheDocument();
    });

    expect(screen.getByText(mockArtist1.bio)).toBeInTheDocument();
    expect(screen.getByText(mockArtist1.topTracks[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockArtist1.albums[0].name)).toBeInTheDocument();
    // Check for an element from the second album to ensure multiple albums are rendered
    expect(screen.getByText(mockArtist1.albums[1].name)).toBeInTheDocument();
    // Check for an element from the second track
    expect(screen.getByText(mockArtist1.topTracks[1].title)).toBeInTheDocument();
  });

  it('renders details for a different artist when artistId changes', async () => {
    mockedUseParams.mockReturnValue({ artistId: '2' });
    mockedUseFetch.mockReturnValue([mockAllArtists, null, false]);
    
    render(<Artist />);

    await waitFor(() => {
      expect(screen.getByText(mockArtist2.name)).toBeInTheDocument();
    });

    expect(screen.getByText(mockArtist2.bio)).toBeInTheDocument();
    expect(screen.getByText(mockArtist2.topTracks[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockArtist2.albums[0].name)).toBeInTheDocument();
  });

  it('displays "No top tracks listed" if artist has no top tracks', async () => {
    const artistWithNoTracks = { ...mockArtist1, topTracks: [] };
    mockedUseParams.mockReturnValue({ artistId: '1' });
    mockedUseFetch.mockReturnValue([[artistWithNoTracks], null, false]);
    
    render(<Artist />);

    await waitFor(() => {
      expect(screen.getByText(artistWithNoTracks.name)).toBeInTheDocument();
    });
    expect(screen.getByText(/no top tracks listed for this artist/i)).toBeInTheDocument();
  });

  it('displays "No albums found" if artist has no albums', async () => {
    const artistWithNoAlbums = { ...mockArtist1, albums: [] };
    mockedUseParams.mockReturnValue({ artistId: '1' });
    mockedUseFetch.mockReturnValue([[artistWithNoAlbums], null, false]);
    
    render(<Artist />);

    await waitFor(() => {
      expect(screen.getByText(artistWithNoAlbums.name)).toBeInTheDocument();
    });
    expect(screen.getByText(/no albums found for this artist/i)).toBeInTheDocument();
  });
});
