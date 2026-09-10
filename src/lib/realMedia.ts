/**
 * Real photography uploaded to public/, keyed to match the placeholder slots
 * they replace. Paths are URL-encoded since the source filenames contain
 * spaces and "&".
 */

export const heroImage = encodeURI('/Riyadh Robotics Lab at Sunset.png')
export const admissionsHeroImage = encodeURI('/Admissions Hero.png')

/** Keyed by exact program name (t.programs.colleges[].programs[].name). */
export const programImages: Record<string, string> = {
  'Mechatronics & Robotics Engineering': encodeURI('/Mechatronics & Robotics Engineering.png'),
  'Artificial Intelligence & Machine Learning': encodeURI('/Artificial Intelligence & Machine Learning.png'),
  'Product & Industrial Design': encodeURI('/Product & Industrial Design.png'),
  Architecture: encodeURI('/Architecture.png'),
}

/** In the same order as t.about.leadership. */
export const leadershipImages = [
  encodeURI('/Sara Alqahtani.png'),
  encodeURI('/Faisal Al-Otaibi.png'),
  encodeURI('/Noura Al-Harbi.png'),
  encodeURI('/Khalid Al-Dosari.png'),
]

/** Keyed by campusGalleryPrompts[].id. */
export const campusLifeImages: Record<string, string> = {
  'campus-maker-space': encodeURI('/Campus Life - Documentary.png'),
  'campus-majlis-studio': encodeURI('/Campus Life - Lifestyle.png'),
  'campus-ar-lab': encodeURI('/Campus Life - Editorial.png'),
  'campus-courtyard': encodeURI('/Campus Life - Architectural.png'),
}
