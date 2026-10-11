/**
 * PORTFOLIO CONFIGURATION
 * =======================
 * Every piece of text on the website comes from this file.
 * Edit the values below; you do not need to touch any component.
 *
 * Rules:
 *  - Leave a link as '' (empty) to hide it. Never put a placeholder URL here.
 *  - Set `published: false` on an entry to hide it until its details are confirmed.
 */
import type { Certification, ExperienceEntry, Highlight, Project, SkillGroup } from '../types'

/* ---------------------------------------------------------------- personal */
export const personal = {
  name: 'Jesse Dagana',
  fullName: 'Jesse Dagana',
  location: 'Abuja, Nigeria',
  status: 'Open to IT roles',
  intro:
    "Computer Science graduate trained by NITDA and NCAIR in embedded systems and advanced Python. I've built a facial recognition attendance system from scratch and gained hands-on experience with hardware, microcontrollers and broadcast equipment. I'm currently studying for CompTIA A+ and ready to help teams keep their systems, devices and users running smoothly.",
  focus: ['IT Support', 'Systems & Networking', 'Embedded Systems', 'Troubleshooting'],
  /** Optional portrait in /public, e.g. 'jesse.jpg'. Leave '' to keep the text-only hero. */
  photo: 'jesse.jpg',
}

/** Short facts shown under the hero introduction. */
export const facts = [
  { label: 'Education', value: 'BSc Computer Science, Landmark University, 2026' },
  { label: 'Training', value: 'NITDA · NCAIR, 2025' },
  { label: 'Studying', value: 'CompTIA A+' },
  { label: 'Based in', value: 'Abuja, Nigeria' },
]

/* ------------------------------------------------------------------ résumé */
/**
 * Where the Download Résumé button points.
 *  - A Google Drive direct-download link (current), shared as "Anyone with the link", or
 *  - a path inside /public, e.g. 'resume/jesse-dagana-resume.pdf'. A missing local file shows a fallback instead of a dead link.
 */
export const resumePath = 'https://drive.google.com/uc?export=download&id=1GYZzGP8uNwF1IzpPNkPxYDFSh4sJl53T'

/* ----------------------------------------------------------------- contact */
export const contact = {
  email: 'ebitimidagana@gmail.com',
  /** Shown as written; dialled in international format. Remove a number to hide it. */
  phones: ['0902 761 6111', '0706 597 2002'],
  linkedin: 'https://www.linkedin.com/in/jesse-dagana-69821026a',
  github: 'https://github.com/JESSEDAGANA',
  x: '',      // add your X profile URL to show it
}

/* -------------------------------------------------------------- highlights */
export const highlights: Highlight[] = [
  { value: '2 internships', label: 'Professional Experience' },
  { value: '3 certificates', label: 'NITDA Training' },
  { value: '1 computer vision system', label: 'Featured Project' },
]

/* ------------------------------------------------------------------- about */
export const about = [
  'I studied Computer Science at Landmark University and graduated in 2026. The degree gave me a grounding in operating systems, networks and programming. The work I have enjoyed most is the practical side: finding out why something is not working and getting it working again.',
  'In 2025 I trained with NITDA and its AI and robotics centre, NCAIR, where I worked hands-on with microcontrollers and hardware and completed advanced Python and data science training. Over the same period I interned at Wonderland Television, operating audio recorders and cameras in a broadcast environment.',
  "I'm now studying for CompTIA A+ and looking for a role in IT support or systems, where reliable technology and patient problem-solving make a real difference to the people using it.",
]

/* ------------------------------------------------------------------ skills */
/** Only list tools you have actually used or studied. */
export const skills: SkillGroup[] = [
  { title: 'IT Support & Troubleshooting', items: ['Hardware and software troubleshooting', 'Computer hardware fundamentals', 'Operating system support', 'Basic system diagnostics'] },
  { title: 'Systems & Networking', items: ['Networking fundamentals', 'Network troubleshooting', 'Computer systems', 'Technical support workflows'] },
  { title: 'Programming & Development', items: ['Python', 'Data science with Python'] },
  { title: 'Embedded Systems', items: ['Microcontrollers', 'Embedded systems fundamentals', 'Hardware–software integration'] },
  { title: 'Applied AI & Computer Vision', items: ['YOLO-based object detection', 'Facial recognition workflows', 'Python machine learning applications', 'OpenCV for image handling'] },
  { title: 'Media Equipment', items: ['Zoom audio recorders', 'Camera operation and multi-angle shooting', 'Recorded media management'] },
]

/* -------------------------------------------------------------- experience */
export const experience: ExperienceEntry[] = [
  {
    organisation: 'NITDA · National Centre for Artificial Intelligence and Robotics (NCAIR)',
    role: 'Intern',
    dates: 'Mar 2025 – Sep 2025',
    location: 'Abuja',
    description: "Practical training at Nigeria's national IT development agency and its AI and robotics centre.",
    points: [
      'Worked hands-on with embedded systems, hardware components and microcontrollers',
      'Completed advanced Python and data science training',
      'Earned NITDA certificates in Python Advanced and Embedded Systems',
    ],
    published: true,
  },
  {
    organisation: 'Wonderland Television',
    role: 'Intern',
    dates: 'Mar 2025 – Sep 2025',
    description: 'Broadcast production support in studio and field recording.',
    points: [
      'Operated Zoom audio recorders to capture programme and interview sound',
      'Handled camera recording, including setup, framing and multi-angle shooting',
      'Organised recorded footage and audio files for editing and broadcast',
    ],
    published: true,
  },
]

/* ---------------------------------------------------------------- projects */
export const projects: Project[] = [
  {
    title: 'Facial Recognition Attendance System',
    context: 'Final-year project · BSc Computer Science',
    description: 'A computer vision attendance system designed to detect faces, identify enrolled individuals, and record attendance automatically.',
    problem: 'Taking attendance by hand uses class time and is easy to get wrong. This project automates the process using a camera, so attendance is recorded consistently without a manual register.',
    implementation: [
      'Faces are detected in each camera frame with YOLO11 Nano.',
      'Each detected face is identified with the face_recognition Python library, which uses dlib’s ResNet-based face recognition model, by comparing it against enrolled individuals.',
      'Application logic is written in Python, and confirmed attendance is written to CSV files.',
    ],
    workflow: [
      'Capture camera input',
      'Detect faces',
      'Extract facial representations',
      'Compare against enrolled individuals',
      'Apply recognition and attendance rules',
      'Record attendance in a CSV file',
    ],
    tags: ['Python', 'YOLO11 Nano', 'face_recognition', 'dlib ResNet', 'CSV'],
    screenshot: '', // e.g. 'projects/attendance.png' once you have a real screenshot
    screenshotAlt: '',
    repoUrl: '',
    demoUrl: '',
  },
]

/* ---------------------------------------------------------- certifications */
export const certifications: Certification[] = [
  {
    name: 'Python Advanced',
    issuer: 'NITDA · NCAIR',
    date: 'June 2025',
    credentialId: '1fa3eae6',
    url: 'https://certificates.nitda.gov.ng/certify/1fa3eae6',
    file: 'certificates/python-advanced.jpg',
    published: true,
  },
  {
    name: 'Embedded Systems',
    issuer: 'NITDA · NCAIR',
    date: '21 Jul – 20 Aug 2025',
    url: '', // the QR code only opens the NCAIR login page, so no public verification link
    file: 'certificates/embedded-systems.jpg',
    published: true,
  },
  {
    name: 'Data Science',
    issuer: 'NITDA · NCAIR',
    date: '2025', // replace with the exact date on the certificate
    url: '',
    published: true,
  },
]

/** Certifications currently being studied. */
export const inProgress = ['CompTIA A+ (studying)']

/* -------------------------------------------------------------- navigation */
export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
