export const heroPrompt =
  'Wide editorial photo, golden-hour light inside a glass-walled robotics studio in Riyadh. A young Saudi woman in a modern, tailored abaya and hijab adjusts a robotic arm with a stylus tablet; beside her a Saudi man in a crisp white thobe and red-and-white shemagh wears an AR headset reviewing a 3D building model. Clean architecture, warm sand-and-maroon palette, shallow depth of field, photorealistic, National Geographic × Wallpaper* style.'

export const collegePrompts: Record<string, string> = {
  'engineering-robotics':
    'Saudi male engineering student in navy coveralls over a thobe, safety glasses pushed up, programming a six-axis industrial robot arm on a factory floor lab; large touchscreen HMI panel glowing in foreground; other Saudi students in shemagh visible collaborating in the background; documentary industrial photography, cool steel tones with maroon safety markings.',
  'computing-ai':
    'Overhead shot of a Saudi woman in a modern abaya with a minimalist hijab coding at a curved multi-monitor AI workstation, holographic neural-network visualization projected above the desk; a Saudi man in a thobe reviews the same dashboard on a tablet beside her; late-night lab lighting, deep maroon ambient glow, cinematic, high detail.',
  'design-digital-arts':
    'Saudi design student, modern streetwear-influenced abaya with subtle geometric embroidery, sketching a product concept on a large stylus display in a bright design studio; 3D-printed prototypes and mood boards with Najdi-pattern motifs on the wall; soft daylight, editorial product-design photography, sand and off-white palette.',
  'architecture-urban-design':
    'Saudi architecture student in a light thobe and ghutra reviewing a large-scale physical model of a futuristic desert city alongside a female classmate in an abaya using an AR headset to overlay a digital twin of the same model; drafting studio with wide windows overlooking Riyadh skyline at dusk, warm maroon accent lighting.',
}

export const campusGalleryPrompts = [
  {
    id: 'campus-maker-space',
    aspect: '4/3' as const,
    shotType: 'Documentary',
    prompt:
      'Saudi students, men in thobes and women in modern abayas, collaborating at a 24-hour maker space with CNC mills and laser cutters; safety goggles, focused expressions, warm workshop lighting, shallow depth of field.',
  },
  {
    id: 'campus-majlis-studio',
    aspect: '3/4' as const,
    shotType: 'Lifestyle',
    prompt:
      'Low-seating majlis-style collaboration studio with modern geometric cushions in maroon and sand tones; a mixed group of Saudi students in thobes and abayas sketching on tablets and laptops, natural light through mashrabiya-inspired screens.',
  },
  {
    id: 'campus-ar-lab',
    aspect: '3/4' as const,
    shotType: 'Editorial',
    prompt:
      'Saudi woman in an elegant abaya wearing a sleek AR headset, hands moving through a holographic interface in a dedicated immersive-media studio; dramatic maroon rim lighting, futuristic minimalist interior.',
  },
  {
    id: 'campus-courtyard',
    aspect: '16/9' as const,
    shotType: 'Architectural',
    prompt:
      'Sunlit modern courtyard on a Saudi university campus blending contemporary Najdi architecture with glass and sand-toned stone; students in thobes and abayas walking and conversing, wide symmetrical composition, golden hour.',
  },
]

export const aboutPrompt =
  'Formal editorial portrait-style group photo of Saudi university leadership — men in thobes and shemaghs, women in tailored abayas — standing in a modern atrium with a large digital display showing Vision 2030 iconography; confident, dignified, natural light, shallow depth of field.'

export const admissionsPrompt =
  'Saudi high-school-aged student in modern professional attire (thobe / abaya) sitting at a bright admissions welcome desk with a laptop, reviewing an acceptance portal; a NATD advisor gestures toward a tablet showing a campus map; optimistic, warm, editorial lighting.'

export const contactPrompt =
  'Wide shot of the NATD campus entrance and welcome pavilion at dusk, modern Najdi-inspired architecture lit from within, a small group of Saudi students and staff in thobes and abayas walking toward the entrance; long exposure, warm maroon and sand lighting.'
