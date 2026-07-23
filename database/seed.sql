USE faquit_music;

INSERT INTO artists (id, name, slug, bio, genre, profile_image, hero_image) VALUES
(1, 'FAQUIT', 'faquit', 'Placeholder artist profile for the FAQUIT music platform.', 'Experimental', '/images/faquit-profile.jpg', '/images/faquit-hero.jpg');

INSERT INTO genres (name, slug) VALUES
('Trap', 'trap'),
('Hip Hop', 'hip-hop'),
('R&B', 'r-and-b'),
('Pop', 'pop'),
('Electronic', 'electronic'),
('Experimental', 'experimental');

INSERT INTO users (username, email, password_hash, role) VALUES
('faquit', 'admin@faquit.example', '$2b$10$JQk4a6afZ7Y3J5xGgxF9TOcilmQ6krZQ9d79sN2sZQ8Y43gS6HjY2', 'admin');

INSERT INTO releases (artist_id, title, slug, description, cover_image, release_type, release_date, status, featured) VALUES
(1, 'FAQUIT — RELEASE 01', 'faquit-release-01', 'Placeholder release for the public experience.', '/images/release-01.jpg', 'single', '2026-07-01', 'published', 1),
(1, 'FAQUIT — RELEASE 02', 'faquit-release-02', 'Placeholder release for the next launch.', '/images/release-02.jpg', 'ep', '2026-08-15', 'published', 0),
(1, 'FAQUIT — NEXT LAUNCH', 'faquit-next-launch', 'Upcoming placeholder release.', '/images/next-launch.jpg', 'single', '2026-09-01', 'draft', 0);

INSERT INTO songs (artist_id, title, slug, description, duration, cover_image, audio_type, audio_url, soundcloud_url, is_featured, is_published) VALUES
(1, 'Pulse Loop', 'pulse-loop', 'Placeholder local audio track.', '03:18', '/images/pulse-loop.jpg', 'local', '/uploads/audio/placeholder-local.mp3', NULL, 1, 1),
(1, 'Night Bloom', 'night-bloom', 'Placeholder local audio track.', '02:54', '/images/night-bloom.jpg', 'local', '/uploads/audio/placeholder-local-2.mp3', NULL, 0, 1),
(1, 'Cloud Echo', 'cloud-echo', 'Placeholder SoundCloud track.', '04:10', '/images/cloud-echo.jpg', 'soundcloud', NULL, 'https://soundcloud.com/placeholder-faquit/track-example', 1, 1);

INSERT INTO release_songs (release_id, song_id, track_number) VALUES
(1, 1, 1),
(1, 2, 2),
(2, 3, 1);

INSERT INTO gallery_items (artist_id, title, description, media_type, media_url, thumbnail_url, sort_order, is_published) VALUES
(1, 'Visual 01', 'Placeholder gallery item.', 'image', '/images/gallery-01.jpg', '/images/gallery-01.jpg', 1, 1),
(1, 'Visual 02', 'Placeholder gallery item.', 'image', '/images/gallery-02.jpg', '/images/gallery-02.jpg', 2, 1),
(1, 'Visual 03', 'Placeholder gallery item.', 'image', '/images/gallery-03.jpg', '/images/gallery-03.jpg', 3, 1),
(1, 'Visual 04', 'Placeholder gallery item.', 'image', '/images/gallery-04.jpg', '/images/gallery-04.jpg', 4, 1),
(1, 'Visual 05', 'Placeholder gallery item.', 'image', '/images/gallery-05.jpg', '/images/gallery-05.jpg', 5, 1);

INSERT INTO social_links (artist_id, platform, url, is_active) VALUES
(1, 'instagram', 'https://instagram.com/placeholder-faquit', 1),
(1, 'tiktok', 'https://tiktok.com/@placeholder-faquit', 1),
(1, 'youtube', 'https://youtube.com/@placeholder-faquit', 1),
(1, 'spotify', 'https://open.spotify.com/artist/placeholder', 1),
(1, 'soundcloud', 'https://soundcloud.com/placeholder-faquit', 1);

INSERT INTO site_settings (setting_key, setting_value) VALUES
('site_title', 'FAQUIT'),
('site_description', 'A premium experimental music platform.'),
('contact_email', 'contact@faquit.example'),
('coming_soon_title', 'New release arriving soon'),
('coming_soon_date', '2026-09-01'),
('hero_video', ''),
('hero_text', 'A sound-driven visual experience.');
