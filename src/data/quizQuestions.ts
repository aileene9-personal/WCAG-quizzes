import { QuizQuestion } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: 'Which contrast ratio requirement must be met for text less than 18 points (24px) that is NOT a logo or brand name according to WCAG 2.2 Level AA?',
    options: [
      '3:1 for all text',
      '4.5:1 for all text',
      '7:1 for all text',
      '4.5:1 for normal text and 3:1 for large text'
    ],
    correctAnswer: '7:1 for all text',
    explanation: 'WCAG 2.2 Success Criterion 1.4.3 (Level AA) requires a contrast ratio of at least 4.5:1 for normal-size text. The 3:1 ratio applies only to large text (18pt/24px or 14pt/19px bold), and the 7:1 ratio is a Level AAA requirement. This ensures readability for users with low vision.',
    wcagCriterion: '1.4.3 Contrast (Minimum)',
    wcagLevel: 'AA',
    category: 'Visual Design',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html',
    rating: 98
  },
  {
    id: '2',
    question: 'Which of the following combinations violates WCAG 2.2 Level A keyboard accessibility requirements for interactive elements?',
    options: [
      'Using both click and keydown events for buttons',
      'Implementing custom keyboard shortcuts with modifier keys',
      'Using mouseenter without keyboard equivalent events',
      'Adding tabindex="-1" to non-interactive elements'
    ],
    correctAnswer: 'Using mouseenter without keyboard equivalent events',
    explanation: 'Using mouseenter without corresponding keyboard events violates SC 2.1.1 Keyboard, as it makes functionality available only to mouse users. All functionality must be operable through a keyboard interface. The other options are valid implementations: click/keydown provides redundancy, custom shortcuts with modifiers avoid conflicts, and tabindex="-1" is valid for programmatic focus.',
    wcagCriterion: '2.1.1 Keyboard',
    wcagLevel: 'A',
    category: 'Keyboard Navigation',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html',
    rating: 97
  },
  {
    id: '3',
    question: 'According to ARIA authoring practices, which scenario requires using aria-label instead of aria-labelledby?',
    options: [
      'When the visible label text needs to be different from the accessible name',
      'When the element already has a visible label',
      'When multiple elements reference the same label',
      'When the label needs to be translated into different languages'
    ],
    correctAnswer: 'When the visible label text needs to be different from the accessible name',
    explanation: 'aria-label is appropriate when you need to provide an accessible name that differs from any visible text (e.g., a button with only an icon). aria-labelledby is preferred when referencing visible text to maintain consistency between visual and audio output. This choice impacts both screen reader users and voice control users who rely on visible labels.',
    wcagCriterion: '4.1.2 Name, Role, Value',
    wcagLevel: 'A',
    category: 'ARIA',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html',
    rating: 96
  },
  {
    id: '4',
    question: 'Which form error handling implementation violates WCAG 2.2 Level A requirements for error identification and recovery?',
    options: [
      'Displaying errors after form submission with clear error messages',
      'Using color and icons with descriptive text to indicate errors',
      'Moving focus to the first error with an announcement',
      'Clearing all form fields when validation errors occur'
    ],
    correctAnswer: 'Clearing all form fields when validation errors occur',
    explanation: 'Clearing form fields when errors occur violates SC 3.3.1 Error Identification and 3.3.2 Labels or Instructions, as it removes user input without warning and forces users to re-enter correct information. This is particularly problematic for users with cognitive disabilities or motor impairments. The other techniques support accessible error handling by maintaining user input and providing clear feedback.',
    wcagCriterion: '3.3.1 Error Identification',
    wcagLevel: 'A',
    category: 'Forms',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html',
    rating: 98
  },
  {
    id: '5',
    question: 'Which timing adjustment mechanism is NOT required by WCAG 2.2 Success Criterion 2.2.1 Timing Adjustable for content with time limits?',
    options: [
      'Option to turn off time limits before encountering them',
      'Ability to extend the time limit up to 10 times the default',
      'Warning users at least 20 seconds before time expires',
      'Automatic saving of form data when time expires'
    ],
    correctAnswer: 'Automatic saving of form data when time expires',
    explanation: 'While automatically saving data is a good practice, it is not specifically required by SC 2.2.1. The criterion requires that users can: 1) turn off time limits before encountering them, 2) adjust them up to 10 times the default length, or 3) extend them at least 20 seconds by a simple action. This ensures users with different reading speeds or cognitive processing needs can complete tasks.',
    wcagCriterion: '2.2.1 Timing Adjustable',
    wcagLevel: 'A',
    category: 'Time Limits',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html',
    rating: 97
  },
  {
    id: '6',
    question: 'Which implementation of a skip link mechanism violates WCAG 2.2 Success Criterion 2.4.1 Bypass Blocks?',
    options: [
      'A visually hidden link that becomes visible on keyboard focus',
      'A skip link that moves focus to the main content landmark',
      'A visible link permanently displayed at the top of the page',
      'A skip link that remains hidden when receiving keyboard focus'
    ],
    correctAnswer: 'A skip link that remains hidden when receiving keyboard focus',
    explanation: 'A skip link that remains hidden even when focused violates SC 2.4.1 as it prevents keyboard users from discovering and using this functionality. Skip links must either be permanently visible or become visible when receiving keyboard focus to be compliant. This is crucial for keyboard users to efficiently bypass repetitive navigation blocks.',
    wcagCriterion: '2.4.1 Bypass Blocks',
    wcagLevel: 'A',
    category: 'Navigation',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html',
    rating: 96
  },
  {
    id: '7',
    question: 'Which heading structure implementation violates WCAG 2.2 Success Criterion 1.3.1 Info and Relationships?',
    options: [
      'Using multiple h1 elements in different document sections with aria-labelledby',
      'Skipping from h1 directly to h3 without an h2 level',
      'Using aria-level to dynamically adjust heading levels in a web application',
      'Nesting multiple h2 headings under a single h1 in the document outline'
    ],
    correctAnswer: 'Skipping from h1 directly to h3 without an h2 level',
    explanation: 'Skipping heading levels (e.g., h1 to h3) breaks the logical document hierarchy and violates SC 1.3.1. This disrupts the structural relationships that help users, especially screen reader users, understand content organization. The other options maintain proper structural relationships: multiple h1s in distinct sections, aria-level for dynamic headings, and multiple h2s under an h1 are all valid patterns.',
    wcagCriterion: '1.3.1 Info and Relationships',
    wcagLevel: 'A',
    category: 'Structure',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html',
    rating: 97
  },
  {
    id: '8',
    question: 'According to WCAG 2.2 Success Criterion 1.1.1, which scenario requires implementing a null (empty) alt attribute rather than a text alternative?',
    options: [
      'A decorative background image implemented via CSS',
      'A logo that appears multiple times on the same page',
      'An icon adjacent to descriptive text in a button',
      'A chart with complex data visualization'
    ],
    correctAnswer: 'A decorative background image implemented via CSS',
    explanation: 'Decorative images that are purely presentational and implemented via CSS should have empty alt="" attributes to be properly ignored by assistive technologies. This prevents redundant or unnecessary information. The other cases require meaningful alternatives: logos need consistent branding identification, icons complement button labels for visual users, and charts need comprehensive data descriptions.',
    wcagCriterion: '1.1.1 Non-text Content',
    wcagLevel: 'A',
    category: 'Images',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html',
    rating: 98
  },
  {
    id: '9',
    question: 'Which touch target implementation meets WCAG 2.2 Success Criterion 2.5.8 Target Size (Minimum) without requiring an alternative method?',
    options: [
      'A 32x32 pixel button with 8 pixels of spacing',
      'A 44x44 pixel target with 24 pixels of spacing',
      'A 24x24 pixel icon with hover expansion',
      'A 40x40 pixel button with additional touch area'
    ],
    correctAnswer: 'A 44x44 pixel target with 24 pixels of spacing',
    explanation: 'WCAG 2.2 SC 2.5.8 requires touch targets to be at least 44x44 CSS pixels with adequate spacing, unless an alternative method is provided or an exception applies. The 44x44 pixel target with sufficient spacing meets this requirement directly without needing alternatives. Other options either fail to meet the size requirement or rely on alternative methods that may not be discoverable.',
    wcagCriterion: '2.5.8 Target Size (Minimum)',
    wcagLevel: 'AA',
    category: 'Mobile Accessibility',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html',
    rating: 97
  },
  {
    id: '10',
    question: 'Which combination of multimedia accessibility features is required for pre-recorded video with audio content to meet WCAG 2.2 Level A requirements?',
    options: [
      'Captions and audio description',
      'Transcript and sign language interpretation',
      'Captions and transcript only',
      'Audio description and sign language only'
    ],
    correctAnswer: 'Captions and audio description',
    explanation: 'WCAG 2.2 Level A requires both captions (SC 1.2.2) and audio descriptions (SC 1.2.3) for pre-recorded video with audio. Captions provide access to spoken dialogue and important sounds for users who are deaf or hard of hearing, while audio descriptions provide access to important visual information for users who are blind. Transcripts and sign language, while beneficial, are not required at Level A.',
    wcagCriterion: '1.2.3 Audio Description or Media Alternative',
    wcagLevel: 'A',
    category: 'Multimedia',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html',
    rating: 98
  },
  {
    id: '11',
    question: 'Which ARIA landmark configuration violates ARIA 1.2 specification requirements for complementary landmarks?',
    options: [
      'Multiple complementary landmarks with unique aria-label values',
      'A complementary landmark without an accessible name when multiple exist',
      'A complementary landmark nested inside a main landmark',
      'A complementary landmark with role="complementary" and aria-labelledby'
    ],
    correctAnswer: 'A complementary landmark without an accessible name when multiple exist',
    explanation: 'When multiple complementary landmarks exist on a page, each must have a unique accessible name (via aria-label or aria-labelledby) to distinguish them. While a single complementary landmark does not require a label, multiple instances without unique labels violate the ARIA specification and make navigation difficult for screen reader users.',
    wcagCriterion: '1.3.6 Identify Purpose',
    wcagLevel: 'AAA',
    category: 'ARIA',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose.html',
    rating: 96
  },
  {
    id: '12',
    question: 'Which color contrast implementation satisfies WCAG 2.2 Level AA requirements for both normal and large-scale text?',
    options: [
      'Normal text at 3:1, large text at 4.5:1',
      'Normal text at 7:1, large text at 4.5:1',
      'Normal text at 3:1, large text at 3:1',
      'Normal text at 4.5:1, large text at 3:1'
    ],
    correctAnswer: 'Normal text at 4.5:1, large text at 3:1',
    explanation: 'WCAG 2.2 Level AA (SC 1.4.3) requires a contrast ratio of at least 4.5:1 for normal text (less than 18pt/24px) and at least 3:1 for large text (at least 18pt/24px or 14pt/19px bold). This ensures readability for users with low vision while recognizing that larger text can be readable at lower contrast ratios. The other combinations either fail to meet these requirements or exceed them unnecessarily.',
    wcagCriterion: '1.4.3 Contrast (Minimum)',
    wcagLevel: 'AA',
    category: 'Visual Design',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html',
    rating: 97
  },
  {
    id: '13',
    question: 'Which language attribute implementation violates WCAG 2.2 Success Criterion 3.1.2 Language of Parts?',
    options: [
      'Using lang="es" for an inline Spanish quote within English text',
      'Omitting the lang attribute on text matching the document language',
      'Using lang="fr-CA" for Canadian French content within an English page',
      'Using lang="und" for text in an unidentified language'
    ],
    correctAnswer: 'Using lang="und" for text in an unidentified language',
    explanation: 'Using "und" as a language value violates SC 3.1.2 as it is not a valid BCP 47 language tag for content. Text in an unknown language should either be identified with a valid language tag or left without a lang attribute if the language cannot be determined. This ensures proper pronunciation by screen readers and supports language-specific styling and processing.',
    wcagCriterion: '3.1.2 Language of Parts',
    wcagLevel: 'AA',
    category: 'Language',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html',
    rating: 96
  },
  {
    id: '14',
    question: 'Which implementation best meets WCAG 2.2 Success Criterion 1.1.1 for providing alternative text for complex images like charts or diagrams?',
    options: [
      'A detailed description exceeding 150 characters in the alt attribute',
      'A brief alt text describing the image purpose with an adjacent detailed description',
      'Multiple nested img elements with different alt texts for different parts',
      'A tooltip containing the full description activated on hover'
    ],
    correctAnswer: 'A brief alt text describing the image purpose with an adjacent detailed description',
    explanation: 'For complex images, the best practice is to provide a brief alt text that identifies the image purpose, combined with a more detailed description in the adjacent content or via aria-describedby. This approach ensures quick navigation for screen reader users while providing access to all necessary details. Long alt texts are unwieldy for navigation, nested images are invalid, and tooltips are unreliable for accessibility.',
    wcagCriterion: '1.1.1 Non-text Content',
    wcagLevel: 'A',
    category: 'Images',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html',
    rating: 98
  },
  {
    id: '15',
    question: 'Which autocomplete attribute implementation violates WCAG 2.2 Success Criterion 1.3.5 Identify Input Purpose?',
    options: [
      'Using autocomplete="given-name" for a first name input field',
      'Using autocomplete="off" for a one-time security code field',
      'Using autocomplete="email" for an email address input',
      'Using autocomplete="name" for a combined full name field'
    ],
    correctAnswer: 'Using autocomplete="name" for a combined full name field',
    explanation: 'Using autocomplete="name" for a full name field violates SC 1.3.5 because it does not use the correct tokens as specified in HTML Living Standard. The proper implementation should use separate fields with autocomplete="given-name" and autocomplete="family-name". This ensures proper form autofill functionality and supports users with cognitive disabilities who rely on browser autofill features.',
    wcagCriterion: '1.3.5 Identify Input Purpose',
    wcagLevel: 'AA',
    category: 'Forms',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html',
    rating: 97
  },
  {
    id: '16',
    question: 'Which ARIA live region configuration is inappropriate for a real-time chat application?',
    options: [
      'Using aria-live="polite" for new message notifications',
      'Using aria-live="assertive" for critical system alerts',
      'Using aria-live="assertive" for all chat messages',
      'Using aria-live="polite" for typing indicators'
    ],
    correctAnswer: 'Using aria-live="assertive" for all chat messages',
    explanation: 'Using aria-live="assertive" for all chat messages violates best practices as it interrupts the screen reader user immediately, regardless of what they are doing. Chat messages should use "polite" to queue announcements, while "assertive" should be reserved for critical updates that require immediate attention.',
    wcagCriterion: '4.1.3 Status Messages',
    wcagLevel: 'AA',
    category: 'ARIA',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html',
    rating: 97
  },
  {
    id: '17',
    question: 'Which text presentation technique violates WCAG 2.2 Success Criterion 1.4.8 Visual Presentation?',
    options: [
      'Setting line spacing to 1.5 within paragraphs',
      'Applying full justification (aligned to both margins)',
      'Limiting line length to 80 characters or glyphs',
      'Providing user-adjustable text and background colors'
    ],
    correctAnswer: 'Applying full justification (aligned to both margins)',
    explanation: 'Full justification (text aligned to both margins) violates SC 1.4.8 as it creates uneven spacing between words, making text harder to read for users with cognitive disabilities or reading disorders. The other options comply with the requirements: 1.5 spacing aids readability, 80-character lines prevent eye strain, and color adjustment supports personalization.',
    wcagCriterion: '1.4.8 Visual Presentation',
    wcagLevel: 'AAA',
    category: 'Visual Design',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html',
    rating: 96
  },
  {
    id: '18',
    question: 'Which error prevention technique for legal commitments fails to meet WCAG 2.2 Success Criterion 3.3.4?',
    options: [
      'Displaying a simple confirmation dialog without data review options',
      'Providing a multi-step review process with modification capability',
      'Implementing an auto-save feature with data recovery',
      'Including a checkbox to confirm understanding of terms'
    ],
    correctAnswer: 'Displaying a simple confirmation dialog without data review options',
    explanation: 'A simple confirmation dialog without the ability to review and modify data fails to meet SC 3.3.4, which requires that users can review, confirm, and correct information before finalizing submissions that have legal or financial consequences. This ensures users understand their commitments and can correct any errors before proceeding.',
    wcagCriterion: '3.3.4 Error Prevention (Legal, Financial, Data)',
    wcagLevel: 'AA',
    category: 'Forms',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html',
    rating: 97
  },
  {
    id: '19',
    question: 'Which navigation implementation violates WCAG 2.2 Success Criterion 3.2.3 Consistent Navigation?',
    options: [
      'Dynamically reordering items based on user preferences',
      'Changing the order of navigation items between pages',
      'Adding new items to an existing navigation menu',
      'Conditionally hiding items based on user permissions'
    ],
    correctAnswer: 'Changing the order of navigation items between pages',
    explanation: 'Changing the relative order of navigation items between pages violates SC 3.2.3 Consistent Navigation. While content can be added, removed, or reordered based on user preferences or permissions, the relative order of repeated navigation mechanisms must remain consistent across pages to maintain predictability for users, especially those with cognitive disabilities.',
    wcagCriterion: '3.2.3 Consistent Navigation',
    wcagLevel: 'AA',
    category: 'Navigation',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html',
    rating: 96
  },
  {
    id: '20',
    question: 'Which method of providing multiple ways to locate content fails to satisfy WCAG 2.2 Success Criterion 2.4.5?',
    options: [
      'A site map listing only main section pages',
      'A search function that only indexes page titles',
      'A navigation menu with expandable sections',
      'Related content links within page content'
    ],
    correctAnswer: 'A search function that only indexes page titles',
    explanation: 'A search function limited to page titles fails to meet SC 2.4.5 because it provides insufficient coverage of page content. To be considered a valid way of finding content, search functionality should cover the meaningful content of pages, not just titles. This limitation significantly reduces the effectiveness of the search function as a navigation mechanism.',
    wcagCriterion: '2.4.5 Multiple Ways',
    wcagLevel: 'AA',
    category: 'Navigation',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html',
    rating: 97
  },
  {
    id: '21',
    question: 'Which caption implementation fails to meet WCAG 2.2 Success Criterion 1.2.4 for live content?',
    options: [
      'Auto-generated captions with manual corrections',
      'Delayed captions with 95% accuracy',
      'Real-time captions with occasional spelling errors',
      'Verbatim captions with 30-second delay'
    ],
    correctAnswer: 'Delayed captions with 95% accuracy',
    explanation: 'While 95% accuracy is good, SC 1.2.4 requires captions to be provided in real-time for live audio content. A significant delay makes the content inaccessible to deaf users trying to participate in live events or discussions. Real-time captions with minor errors are preferable to delayed but more accurate captions.',
    wcagCriterion: '1.2.4 Captions (Live)',
    wcagLevel: 'AA',
    category: 'Multimedia',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html',
    rating: 96
  },
  {
    id: '22',
    question: 'Which sign language implementation best meets WCAG 2.2 Success Criterion 1.2.6 for prerecorded multimedia content?',
    options: [
      'Providing sign language for critical content only',
      'Using machine-generated sign language avatars',
      'Offering human sign language interpretation for all prerecorded content',
      'Including sign language only for audio descriptions'
    ],
    correctAnswer: 'Offering human sign language interpretation for all prerecorded content',
    explanation: 'SC 1.2.6 (Level AAA) requires sign language interpretation for all prerecorded audio content in synchronized media. Partial implementation, machine-generated signing, or limiting interpretation to specific content does not meet the requirement. Human interpretation ensures accurate and culturally appropriate sign language delivery.',
    wcagCriterion: '1.2.6 Sign Language (Prerecorded)',
    wcagLevel: 'AAA',
    category: 'Multimedia',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded.html',
    rating: 97
  },
  {
    id: '23',
    question: 'Which implementation violates WCAG 2.2 Success Criterion 3.2.4 Consistent Identification?',
    options: [
      'Using different icons for the same function across different views',
      'Using the same icon with different text labels for distinct functions',
      'Using different text labels for clearly different functions',
      'Using consistent icons and labels for identical functions'
    ],
    correctAnswer: 'Using different icons for the same function across different views',
    explanation: 'Using different icons for the same functionality across different views violates SC 3.2.4, which requires consistent identification of functional components. This inconsistency can confuse users, particularly those with cognitive disabilities. Components that have the same functionality within a set of web pages must be identified consistently.',
    wcagCriterion: '3.2.4 Consistent Identification',
    wcagLevel: 'AA',
    category: 'Navigation',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html',
    rating: 97
  },
  {
    id: '24',
    question: 'Which focus indicator implementation fails to meet WCAG 2.2 Success Criterion 2.4.11 Focus Appearance (Minimum)?',
    options: [
      'A 1px solid outline with 3:1 contrast against adjacent colors',
      'A 2px dotted outline with minimum area of 9 square CSS pixels',
      'A background color change with 4:1 contrast ratio',
      'A solid outline covering at least 2 CSS pixels on all sides'
    ],
    correctAnswer: 'A 1px solid outline with 3:1 contrast against adjacent colors',
    explanation: 'A 1px outline fails SC 2.4.11 which requires focus indicators to have a minimum area of at least 2 CSS pixels on the shortest side. The focus indicator must achieve a minimum contrast ratio of 3:1 against adjacent colors and cover at least 2 CSS pixels on the longest side. The indicator must also have a minimum area of at least 9 square CSS pixels.',
    wcagCriterion: '2.4.11 Focus Appearance',
    wcagLevel: 'AA',
    category: 'Navigation',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html',
    rating: 98
  },
  {
    id: '25',
    question: 'Which heading structure implementation best supports WCAG 2.2 Success Criterion 2.4.10 Section Headings?',
    options: [
      'Using only h1 and h2 elements for a simplified structure',
      'Marking up all bold or large text as headings',
      'Using semantic heading elements to identify sections and subsections',
      'Applying visual heading styles without semantic markup'
    ],
    correctAnswer: 'Using semantic heading elements to identify sections and subsections',
    explanation: 'SC 2.4.10 requires section headings to organize content, with proper semantic heading levels reflecting the document structure. Using semantic heading elements (h1-h6) properly nested creates a clear document outline. Visual styling without semantic markup or oversimplified heading structures fails to provide proper content organization and makes navigation difficult for assistive technology users.',
    wcagCriterion: '2.4.10 Section Headings',
    wcagLevel: 'AAA',
    category: 'Structure',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/section-headings.html',
    rating: 97
  },
  {
    id: '26',
    question: 'What is the most critical implementation requirement for ARIA landmarks in single-page applications according to WCAG 2.2?',
    options: [
      'Announcing dynamic content changes to screen readers',
      'Improving page load performance',
      'Managing client-side routing',
      'Styling different page sections'
    ],
    correctAnswer: 'Announcing dynamic content changes to screen readers',
    explanation: 'In single-page applications, properly implemented ARIA landmarks and live regions are essential for announcing dynamic content changes to screen reader users, ensuring they are aware of updates without page refreshes.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One G: Single page applications',
    category: 'Single Page Applications',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '27',
    question: 'Which combination of navigation strategies is most effective for screen reader users according to WCAG 2.2 and user research?',
    options: [
      'Using headings and ARIA landmarks',
      'Using tab key and skip links',
      'Using page search and landmarks',
      'Using headings, landmarks, and keyboard navigation'
    ],
    correctAnswer: 'Using headings, landmarks, and keyboard navigation',
    explanation: 'Research shows that screen reader users employ multiple complementary strategies: heading navigation for content structure, landmark navigation for major sections, and keyboard navigation for interactive elements. This comprehensive approach provides the most efficient navigation experience.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One H: Strategies of persons with disabilities in using web solutions',
    category: 'Screen Reader Navigation',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '28',
    question: 'Which implementation of device-independent event handlers best meets WCAG 2.2 Success Criterion 2.1.1?',
    options: [
      'Using both pointer and keyboard events with equivalent functionality',
      'Using touch events with mouse event fallbacks',
      'Using only pointer events with aria-labels',
      'Using keyboard events with mouse movement detection'
    ],
    correctAnswer: 'Using both pointer and keyboard events with equivalent functionality',
    explanation: 'To meet SC 2.1.1 Keyboard, implementations must ensure all functionality is operable through keyboard interface without requiring specific timings. Using both pointer and keyboard events with equivalent functionality ensures device independence while maintaining accessibility.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One B: Basic knowledge of programming',
    category: 'Programming',
    difficulty: 'advanced',
    wcagCriterion: '2.1.1 Keyboard',
    wcagLevel: 'A',
    rating: 98
  },
  {
    id: '29',
    question: 'Which assistive technology testing approach provides the most comprehensive coverage according to WCAG-EM?',
    options: [
      'Testing with the latest screen reader versions only',
      'Testing with multiple assistive technologies and browser combinations',
      'Testing with automated accessibility tools',
      'Testing with mobile screen readers exclusively'
    ],
    correctAnswer: 'Testing with multiple assistive technologies and browser combinations',
    explanation: 'WCAG-EM methodology requires testing with various assistive technologies and browser combinations to ensure broad compatibility. This approach helps identify issues that might only appear in specific technology combinations and better represents real-world usage patterns.',
    wasBoKDomain: 'Domain Two: Identify accessibility issues in web solutions',
    wasBoKSection: 'Domain Two C: Testing with assistive technologies',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '30',
    question: 'Which focus management implementation best supports WCAG 2.2 Success Criterion 2.4.3?',
    options: [
      'Maintaining focus order matching visual layout',
      'Automatically moving focus after user interactions',
      'Preserving focus position during dynamic updates',
      'All of the above with user control over focus movement'
    ],
    correctAnswer: 'All of the above with user control over focus movement',
    explanation: 'Proper focus management requires maintaining logical tab order, managing focus during interactions, and preserving focus during updates, all while ensuring users maintain control over focus movement. This comprehensive approach meets SC 2.4.3 Focus Order requirements.',
    wcagCriterion: '2.4.3 Focus Order',
    wcagLevel: 'A',
    category: 'Focus Management',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html',
    rating: 98
  },
  {
    id: '31',
    question: 'Which semantic HTML implementation best supports WCAG 2.2 Success Criterion 1.3.1 Info and Relationships?',
    options: [
      'Using native HTML elements to convey document structure',
      'Using div elements with ARIA roles for all content',
      'Using CSS classes to indicate semantic meaning',
      'Using data attributes to define content relationships'
    ],
    correctAnswer: 'Using native HTML elements to convey document structure',
    explanation: 'Native HTML elements provide the strongest foundation for accessibility by conveying semantic structure and relationships programmatically. While ARIA can supplement HTML semantics, it should not be used as a replacement for proper HTML elements when they are available.',
    wcagCriterion: '1.3.1 Info and Relationships',
    wcagLevel: 'A',
    category: 'Structure',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html',
    rating: 97
  },
  {
    id: '32',
    question: 'Which combination of design considerations best supports users with cognitive disabilities according to WCAG 2.2?',
    options: [
      'Simple language and consistent navigation only',
      'Visual design and animation effects',
      'Sufficient time, clear structure, and error prevention',
      'Audio and video content with captions'
    ],
    correctAnswer: 'Sufficient time, clear structure, and error prevention',
    explanation: 'Users with cognitive disabilities benefit most from a combination of sufficient time to complete tasks (SC 2.2.1), clear content structure (SC 1.3.1), and error prevention mechanisms (SC 3.3.4). This comprehensive approach helps reduce cognitive load and supports successful task completion.',
    wcagCriterion: '2.2.1 Timing Adjustable',
    wcagLevel: 'A',
    category: 'Cognitive',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html',
    rating: 96
  },
  {
    id: '33',
    question: 'Which quality assurance approach best identifies accessibility issues early in development according to WASBoK?',
    options: [
      'Running automated tests during deployment',
      'Integrating accessibility checks into the development workflow',
      'Conducting user testing after release',
      'Performing manual audits before launch'
    ],
    correctAnswer: 'Integrating accessibility checks into the development workflow',
    explanation: 'Integrating accessibility checks directly into the development workflow (including code reviews, automated testing, and developer tools) helps identify and address issues early, reducing the cost and effort of remediation compared to finding issues after deployment.',
    wasBoKDomain: 'Domain Two: Identify accessibility issues in web solutions',
    wasBoKSection: 'Domain Two E: Accessibility quality assurance',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '34',
    question: 'Which touch interface implementation best meets WCAG 2.2 Success Criteria 2.5.1 and 2.5.2?',
    options: [
      'Supporting multipoint gestures with keyboard alternatives',
      'Implementing single-point activation with ample touch targets',
      'Using touch-only interactions with error messages',
      'Requiring specific gesture patterns for all interactions'
    ],
    correctAnswer: 'Implementing single-point activation with ample touch targets',
    explanation: 'To meet both Pointer Gestures (2.5.1) and Pointer Cancellation (2.5.2), interfaces should use single-point activation that can be canceled and provide adequate touch targets. This ensures users with mobility impairments can operate the interface successfully.',
    wcagCriterion: '2.5.1 Pointer Gestures',
    wcagLevel: 'A',
    category: 'Mobile Accessibility',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html',
    rating: 98
  },
  {
    id: '35',
    question: 'Which automated testing approach best complements manual accessibility testing according to WCAG-EM?',
    options: [
      'Running automated tools on the entire site monthly',
      'Using automated tools to identify potential issues for manual verification',
      'Replacing manual testing with comprehensive automated scans',
      'Running automated tests only on updated content'
    ],
    correctAnswer: 'Using automated tools to identify potential issues for manual verification',
    explanation: 'Automated testing tools are most effective when used to identify potential issues that are then manually verified. This approach combines the efficiency of automated scanning with the accuracy of human judgment, as automated tools cannot detect all accessibility issues.',
    wasBoKDomain: 'Domain Two: Identify accessibility issues in web solutions',
    wasBoKSection: 'Domain Two D: Testing tools for the web',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '36',
    question: 'Which components are essential for a complete Accessibility Conformance Report according to WCAG-EM?',
    options: [
      'Test results and screenshots only',
      'Success criteria evaluation, methodology, and remediation guidance',
      'Automated test results and code snippets',
      'Visual design recommendations and timeline'
    ],
    correctAnswer: 'Success criteria evaluation, methodology, and remediation guidance',
    explanation: 'A comprehensive Accessibility Conformance Report must include detailed evaluation of success criteria, clear documentation of testing methodology, and specific guidance for remediation. This ensures the report is actionable and supports effective accessibility improvements.',
    wasBoKDomain: 'Domain Three: Remediating issues in web solutions',
    wasBoKSection: 'Domain Three C: Integrate Accessibility into the Procurement Process',
    category: 'Documentation',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '37',
    question: 'Which prioritization strategy for accessibility remediation best aligns with WCAG 2.2 and user impact?',
    options: [
      'Fixing all Level A issues before Level AA',
      'Addressing issues based on development complexity',
      'Prioritizing issues by user impact and frequency',
      'Focusing on visual issues first'
    ],
    correctAnswer: 'Prioritizing issues by user impact and frequency',
    explanation: 'The most effective remediation strategy prioritizes issues based on their impact on users and how frequently they affect user interactions, regardless of conformance level. This approach ensures the most significant barriers are addressed first.',
    wasBoKDomain: 'Domain Three: Remediating issues in web solutions',
    wasBoKSection: 'Domain Three A: Level of severity and prioritization of issues',
    category: 'Remediation',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '38',
    question: 'Which procurement practice best ensures accessibility requirements are met according to WASBoK?',
    options: [
      'Requiring VPAT documentation only',
      'Including accessibility requirements in contracts and verification processes',
      'Conducting post-purchase accessibility testing',
      'Relying on vendor accessibility statements'
    ],
    correctAnswer: 'Including accessibility requirements in contracts and verification processes',
    explanation: 'Effective procurement requires explicit accessibility requirements in contracts and defined verification processes. This ensures vendors are legally obligated to meet accessibility standards and provides a framework for validating compliance.',
    wasBoKDomain: 'Domain Three: Remediating issues in web solutions',
    wasBoKSection: 'Domain Three C: Integrate Accessibility into the Procurement Process',
    category: 'Procurement',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '39',
    question: 'Which approach to fixing versus redesigning accessibility issues best supports long-term compliance?',
    options: [
      'Always choosing quick fixes to address immediate issues',
      'Evaluating systemic impact and user needs before deciding',
      'Redesigning all components with accessibility issues',
      'Implementing temporary workarounds'
    ],
    correctAnswer: 'Evaluating systemic impact and user needs before deciding',
    explanation: 'The decision between fixing and redesigning should consider systemic impact and user needs. This approach ensures solutions address root causes and provide sustainable accessibility improvements rather than temporary fixes.',
    wasBoKDomain: 'Domain Three: Remediating issues in web solutions',
    wasBoKSection: 'Domain Three B: Recommending strategies and/or techniques for fixing issues',
    category: 'Remediation',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '40',
    question: 'Which role should accessibility experts play in the procurement process according to WASBoK?',
    options: [
      'Final product testing only',
      'Comprehensive involvement from requirements to validation',
      'Reviewing vendor documentation only',
      'Post-purchase consultation'
    ],
    correctAnswer: 'Comprehensive involvement from requirements to validation',
    explanation: 'Accessibility experts should be involved throughout the procurement process, from defining requirements and evaluating proposals to validating deliverables and ensuring compliance. This comprehensive involvement helps prevent accessibility issues and ensures effective implementation.',
    wasBoKDomain: 'Domain Three: Remediating issues in web solutions',
    wasBoKSection: 'Domain Three C: Integrate Accessibility into the Procurement Process',
    category: 'Procurement',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '41',
    question: 'Which ARIA property configuration violates the ARIA specification for tabpanel components?',
    options: [
      'Using aria-selected="true" on the active tab',
      'Using aria-controls to reference the tabpanel id',
      'Using aria-expanded on the tabpanel element',
      'Using role="tab" with aria-labelledby'
    ],
    correctAnswer: 'Using aria-expanded on the tabpanel element',
    explanation: 'The aria-expanded attribute is not appropriate for tabpanel elements according to the ARIA specification. The correct implementation uses aria-selected on tabs and aria-controls to associate tabs with their panels. aria-expanded is intended for expandable widgets like accordions.',
    wcagCriterion: '4.1.2 Name, Role, Value',
    wcagLevel: 'A',
    category: 'ARIA',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html',
    rating: 97
  },
  {
    id: '42',
    question: 'Which target size implementation meets WCAG 2.2 Success Criterion 2.5.8 without requiring alternatives?',
    options: [
      'A 20x20 pixel icon with a 24x24 pixel clickable area',
      'A 24x24 pixel button with 12 pixels of spacing',
      'A 24x24 pixel target with no spacing between adjacent targets',
      'A 20x20 pixel button with a tooltip explaining keyboard shortcuts'
    ],
    correctAnswer: 'A 24x24 pixel button with 12 pixels of spacing',
    explanation: 'WCAG 2.2 SC 2.5.8 requires a minimum target size of 24x24 CSS pixels unless an exception applies. The button with adequate spacing meets this requirement without needing alternatives. Other options either fail to meet the size requirement or rely on alternatives.',
    wcagCriterion: '2.5.8 Target Size (Minimum)',
    wcagLevel: 'AA',
    category: 'Mobile Accessibility',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html',
    rating: 96
  },
  {
    id: '43',
    question: 'Which drag and drop implementation best meets WCAG 2.2 Success Criterion 2.5.7?',
    options: [
      'Providing keyboard shortcuts without visible instructions',
      'Implementing touch gestures with a button alternative',
      'Using native HTML5 drag and drop only',
      'Requiring mouse-only interaction with error messages'
    ],
    correctAnswer: 'Implementing touch gestures with a button alternative',
    explanation: 'SC 2.5.7 requires that dragging movements can be achieved through single-pointer alternatives (like buttons) unless dragging is essential. Touch gestures with button alternatives provide both efficient touch interaction and accessible alternatives.',
    wcagCriterion: '2.5.7 Dragging Movements',
    wcagLevel: 'AA',
    category: 'Input Methods',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html',
    rating: 98
  },
  {
    id: '44',
    question: 'Which sampling approach for accessibility evaluation violates WCAG-EM methodology?',
    options: [
      'Selecting pages based on different functionality',
      'Including only pages with known accessibility issues',
      'Randomly selecting a percentage of total pages',
      'Testing all common page templates'
    ],
    correctAnswer: 'Including only pages with known accessibility issues',
    explanation: 'Testing only pages with known issues violates WCAG-EM methodology, which requires a structured sampling approach including common pages, essential functionality, different page types, and states. This ensures comprehensive coverage of the web solution.',
    wasBoKDomain: 'Domain Two: Identify accessibility issues in web solutions',
    wasBoKSection: 'Domain Two A: Testing process and test plan',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '45',
    question: 'Which form behavior violates WCAG 2.2 Success Criterion 3.2.2 On Input?',
    options: [
      'Updating related fields based on a selection',
      'Submitting a form when focus leaves the last field',
      'Showing inline validation on blur events',
      'Filtering options based on user input'
    ],
    correctAnswer: 'Submitting a form when focus leaves the last field',
    explanation: 'Automatically submitting a form when focus leaves a field violates SC 3.2.2, which requires that changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of this behavior.',
    wcagCriterion: '3.2.2 On Input',
    wcagLevel: 'A',
    category: 'Forms',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/on-input.html',
    rating: 98
  },
  {
    id: '46',
    question: 'Which combination of test plan components would fail to meet WCAG-EM requirements for comprehensive evaluation?',
    options: [
      'Automated testing tools and success criteria without manual verification steps',
      'Manual testing procedures and assistive technology testing without defining test environments',
      'Success criteria checklist and conformance target without sampling methodology',
      'Test environment specifications and evaluation scope without success criteria'
    ],
    correctAnswer: 'Automated testing tools and success criteria without manual verification steps',
    explanation: 'WCAG-EM methodology requires both automated and manual testing approaches. Relying solely on automated tools without manual verification steps fails to meet the requirement for comprehensive evaluation, as automated tools cannot detect many accessibility issues that require human judgment.',
    wasBoKDomain: 'Domain Two: Identify accessibility issues in web solutions',
    wasBoKSection: 'Domain Two A: Testing process and test plan',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '47',
    question: 'Which accessibility evaluation report format best supports remediation efforts according to WCAG-EM?',
    options: [
      'A high-level summary of failed success criteria with screenshots',
      'Detailed technical issues without prioritization or impact assessment',
      'Issue descriptions with steps to reproduce, impact, and remediation guidance',
      'List of WCAG violations with corresponding code snippets only'
    ],
    correctAnswer: 'Issue descriptions with steps to reproduce, impact, and remediation guidance',
    explanation: 'An effective evaluation report must include clear steps to reproduce issues, their impact on users with disabilities, and specific remediation guidance. This comprehensive approach ensures that development teams can understand, prioritize, and fix accessibility issues effectively.',
    wasBoKDomain: 'Domain Two: Identify accessibility issues in web solutions',
    wasBoKSection: 'Domain Two F: Evaluation report',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '48',
    question: 'Which user testing methodology for accessibility evaluation provides the most reliable results?',
    options: [
      'Remote testing with expert users of assistive technology',
      'In-person testing with users having diverse disabilities and varying expertise',
      'Automated simulation of user interactions with assistive technologies',
      'Lab testing with accessibility experts simulating user behavior'
    ],
    correctAnswer: 'In-person testing with users having diverse disabilities and varying expertise',
    explanation: 'Testing with a diverse group of users with different disabilities and varying levels of assistive technology expertise provides the most comprehensive insights. This approach captures real-world usage patterns and identifies issues that might be missed by expert users or automated testing.',
    wasBoKDomain: 'Domain Two: Identify accessibility issues in web solutions',
    wasBoKSection: 'Domain Two B: Testing with users',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '49',
    question: 'Which remediation prioritization approach best aligns with the WASBoK methodology?',
    options: [
      'Fixing all Level A violations before addressing Level AA issues',
      'Prioritizing issues based on development effort and resource availability',
      'Addressing issues based on their impact severity and affected user base',
      'Focusing on issues identified by automated testing tools first'
    ],
    correctAnswer: 'Addressing issues based on their impact severity and affected user base',
    explanation: 'The WASBoK emphasizes prioritizing remediation based on the severity of impact on users and the size of the affected user base. This user-centered approach ensures that the most significant barriers are addressed first, regardless of conformance level or technical complexity.',
    wasBoKDomain: 'Domain Three: Remediating issues in web solutions',
    wasBoKSection: 'Domain Three A: Level of severity and prioritization of issues',
    category: 'Remediation',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '50',
    question: 'Which content authoring practice violates both WCAG 2.2 requirements and WASBoK content authoring principles?',
    options: [
      'Using semantic markup with ARIA labels for complex widgets',
      'Providing visible labels with corresponding form control associations',
      'Using heading levels to create visual hierarchy without semantic structure',
      'Including alternative text for images with relevant contextual information'
    ],
    correctAnswer: 'Using heading levels to create visual hierarchy without semantic structure',
    explanation: 'Using heading levels purely for visual styling without proper semantic structure violates both WCAG 2.2 SC 1.3.1 (Info and Relationships) and WASBoK content authoring principles. This practice breaks the logical document outline and makes content difficult to navigate with assistive technologies.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One C: Content authoring',
    category: 'Content',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '51',
    question: 'Which implementation of text spacing adjustments best meets WCAG 2.2 Success Criterion 1.4.12 Text Spacing?',
    options: [
      'Allowing users to adjust only line height',
      'Providing preset text spacing combinations',
      'Supporting all spacing adjustments without loss of content',
      'Implementing fixed spacing based on user preferences'
    ],
    correctAnswer: 'Supporting all spacing adjustments without loss of content',
    explanation: 'SC 1.4.12 requires that no loss of content or functionality occurs when users adjust text spacing properties. This includes line height (1.5 times font size), spacing between paragraphs (2 times font size), letter spacing (0.12 times font size), and word spacing (0.16 times font size).',
    wcagCriterion: '1.4.12 Text Spacing',
    wcagLevel: 'AA',
    category: 'Visual Design',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html',
    rating: 97
  },
  {
    id: '52',
    question: 'Which implementation of content reflow best supports WCAG 2.2 Success Criterion 1.4.10?',
    options: [
      'Scaling content to 400% with horizontal scrolling',
      'Reflowing content at 400% zoom without horizontal scrolling',
      'Providing a mobile-only version with different content',
      'Using fixed-width layouts with zoom disabled'
    ],
    correctAnswer: 'Reflowing content at 400% zoom without horizontal scrolling',
    explanation: 'SC 1.4.10 requires content to reflow without horizontal scrolling at 400% zoom up to 320 CSS pixels viewport width. This ensures users can zoom without having to scroll in two directions, making content accessible for low vision users.',
    wcagCriterion: '1.4.10 Reflow',
    wcagLevel: 'AA',
    category: 'Visual Design',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/reflow.html',
    rating: 96
  },
  {
    id: '53',
    question: 'Which focus appearance implementation best meets WCAG 2.2 Success Criterion 2.4.13 Focus Appearance (Enhanced)?',
    options: [
      'A 2px outline with 3:1 contrast ratio',
      'A solid 8px outline covering entire component',
      'A focus indicator with 4:1 contrast and minimum 2px thickness',
      'Multiple visual indicators totaling at least 8px thickness'
    ],
    correctAnswer: 'Multiple visual indicators totaling at least 8px thickness',
    explanation: 'SC 2.4.13 requires focus indicators to have a contrast ratio of at least 4:1, enclosure thickness of at least 2 pixels, and be at least as large as 8 CSS pixels thick or encompass the focused control. Multiple indicators can be used to achieve the required thickness.',
    wcagCriterion: '2.4.13 Focus Appearance (Enhanced)',
    wcagLevel: 'AAA',
    category: 'Navigation',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced.html',
    rating: 98
  },
  {
    id: '54',
    question: 'Which implementation best meets WCAG 2.2 Success Criterion 2.5.7 Dragging Movements?',
    options: [
      'Providing keyboard shortcuts for drag operations',
      'Implementing single pointer alternatives for all dragging',
      'Using touch-only drag and drop functionality',
      'Requiring drag operations for essential functionality'
    ],
    correctAnswer: 'Implementing single pointer alternatives for all dragging',
    explanation: 'SC 2.5.7 requires that all functionality using dragging movements can be achieved through single pointer interactions without dragging, unless dragging is essential. This ensures users with mobility impairments can access all features.',
    wcagCriterion: '2.5.7 Dragging Movements',
    wcagLevel: 'AA',
    category: 'Input Methods',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html',
    rating: 97
  },
  {
    id: '55',
    question: 'Which authentication implementation best meets WCAG 2.2 Success Criterion 3.3.8 Accessible Authentication (Minimum)?',
    options: [
      'Using CAPTCHA with audio alternatives',
      'Implementing cognitive function tests',
      'Providing alternative methods without memory tests',
      'Requiring password memorization only'
    ],
    correctAnswer: 'Providing alternative methods without memory tests',
    explanation: 'SC 3.3.8 requires that authentication processes have at least one method that does not require users to memorize or transcribe information, unless this is essential. This supports users with cognitive disabilities who may struggle with memory-based tasks.',
    wcagCriterion: '3.3.8 Accessible Authentication (Minimum)',
    wcagLevel: 'AA',
    category: 'Forms',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html',
    rating: 96
  },
  {
    id: '56',
    question: 'Which implementation best supports WCAG 2.2 Success Criterion 2.4.11 Focus Not Obscured (Minimum)?',
    options: [
      'Always displaying tooltips on focus',
      'Ensuring no part of the focus indicator is hidden',
      'Using transparent overlays for focused elements',
      'Showing focus only on keyboard interaction'
    ],
    correctAnswer: 'Ensuring no part of the focus indicator is hidden',
    explanation: 'SC 2.4.11 requires that when a user interface component receives keyboard focus, no part of the focus indicator is hidden by author-created content. This ensures users can always see which element has focus.',
    wcagCriterion: '2.4.11 Focus Not Obscured (Minimum)',
    wcagLevel: 'AA',
    category: 'Navigation',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html',
    rating: 97
  },
  {
    id: '57',
    question: 'Which implementation of redundant entry best meets WCAG 2.2 Success Criterion 3.3.7?',
    options: [
      'Auto-populating fields with previously entered data',
      'Requiring users to confirm all entries twice',
      'Storing data only in browser cookies',
      'Clearing all fields after form submission'
    ],
    correctAnswer: 'Auto-populating fields with previously entered data',
    explanation: 'SC 3.3.7 requires that information previously entered by or provided to the user that is required to be entered again in the same process is either auto-populated or available for the user to select. This reduces cognitive load and potential for errors.',
    wcagCriterion: '3.3.7 Redundant Entry',
    wcagLevel: 'A',
    category: 'Forms',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html',
    rating: 96
  },
  {
    id: '58',
    question: 'Which implementation best meets WCAG 2.2 Success Criterion 2.4.12 Focus Not Obscured (Enhanced)?',
    options: [
      'Ensuring partial visibility of focused elements',
      'Making focused elements fully visible without scrolling',
      'Using semi-transparent overlays for focus indicators',
      'Displaying focus only on mouse hover'
    ],
    correctAnswer: 'Making focused elements fully visible without scrolling',
    explanation: 'SC 2.4.12 requires that no part of the focused component is obscured by author-created content and the entire component is visible without requiring scrolling. This ensures complete visibility of focused elements for all users.',
    wcagCriterion: '2.4.12 Focus Not Obscured (Enhanced)',
    wcagLevel: 'AAA',
    category: 'Navigation',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html',
    rating: 98
  },
  {
    id: '59',
    question: 'Which implementation of accessible authentication best meets WCAG 2.2 Success Criterion 3.3.9 Accessible Authentication (Enhanced)?',
    options: [
      'Using a combination of password and CAPTCHA',
      'Requiring cognitive function tests with alternatives',
      'Implementing authentication without cognitive memory tests',
      'Using biometric authentication only'
    ],
    correctAnswer: 'Implementing authentication without cognitive memory tests',
    explanation: 'SC 3.3.9 requires that authentication processes can be completed by users without requiring cognitive function tests. This is more stringent than the minimum requirement, ensuring maximum accessibility for users with cognitive disabilities.',
    wcagCriterion: '3.3.9 Accessible Authentication (Enhanced)',
    wcagLevel: 'AAA',
    category: 'Forms',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced.html',
    rating: 97
  },
  {
    id: '60',
    question: 'Which implementation best supports WCAG 2.2 Success Criterion 2.5.6 Concurrent Input Mechanisms?',
    options: [
      'Restricting input to touch-only on mobile devices',
      'Allowing only keyboard input on desktop',
      'Supporting multiple input methods simultaneously',
      'Automatically detecting and enforcing preferred input'
    ],
    correctAnswer: 'Supporting multiple input methods simultaneously',
    explanation: 'SC 2.5.6 requires that web content does not restrict use of input modalities available on a platform except where necessary. Users should be able to switch between input methods (keyboard, mouse, touch, etc.) without limitations.',
    wcagCriterion: '2.5.6 Concurrent Input Mechanisms',
    wcagLevel: 'AAA',
    category: 'Input Methods',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/concurrent-input-mechanisms.html',
    rating: 96
  },
  {
    id: '61',
    question: 'Which implementation best meets WCAG 2.2 Success Criterion 2.4.7 Focus Visible (Enhanced)?',
    options: [
      'A default browser focus outline',
      'A high contrast indicator at least 2px thick',
      'Multiple indicators with combined thickness of 8px',
      'A semi-transparent highlight effect'
    ],
    correctAnswer: 'Multiple indicators with combined thickness of 8px',
    explanation: 'SC 2.4.7 Enhanced requires a focus indicator that has a contrast ratio of at least 4.5:1, is at least 2 pixels thick, and has a surface area of at least 8 CSS pixels on its smallest side. Multiple indicators can be combined to meet these requirements.',
    wcagCriterion: '2.4.7 Focus Visible (Enhanced)',
    wcagLevel: 'AAA',
    category: 'Navigation',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-visible-enhanced.html',
    rating: 98
  },
  {
    id: '62',
    question: 'Which target size implementation best supports users with motor impairments according to WCAG 2.2?',
    options: [
      'Using 40x40 pixel targets with 8px spacing',
      'Implementing 44x44 pixel targets with no spacing',
      'Providing 24x24 pixel targets with keyboard alternatives',
      'Using 44x44 pixel targets with adequate spacing'
    ],
    correctAnswer: 'Using 44x44 pixel targets with adequate spacing',
    explanation: 'For optimal accessibility, targets should be at least 44x44 CSS pixels with adequate spacing between targets. This size ensures users with motor impairments can accurately select targets without accidentally triggering adjacent controls.',
    wcagCriterion: '2.5.8 Target Size (Minimum)',
    wcagLevel: 'AA',
    category: 'Mobile Accessibility',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html',
    rating: 97
  },
  {
    id: '63',
    question: 'Which implementation best supports WCAG 2.2 Success Criterion 3.2.6 Consistent Help?',
    options: [
      'Providing help links only on error pages',
      'Including context-sensitive help buttons',
      'Placing help mechanisms in consistent locations',
      'Using automated chatbots for assistance'
    ],
    correctAnswer: 'Placing help mechanisms in consistent locations',
    explanation: 'SC 3.2.6 requires that help mechanisms (such as human contact details, human contact mechanisms, self-help options, and automated contact mechanisms) appear in the same relative order and location when repeated across pages.',
    wcagCriterion: '3.2.6 Consistent Help',
    wcagLevel: 'A',
    category: 'Navigation',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html',
    rating: 96
  },
  {
    id: '64',
    question: 'Which implementation best supports WCAG 2.2 Success Criterion 2.4.9 Focus Appearance (Minimum)?',
    options: [
      'A 1px dotted outline on focus',
      'A solid 2px outline with 3:1 contrast',
      'Multiple indicators totaling 4px thickness',
      'A background color change only'
    ],
    correctAnswer: 'A solid 2px outline with 3:1 contrast',
    explanation: 'SC 2.4.9 requires focus indicators to have a contrast ratio of at least 3:1 against adjacent colors and be at least 2 CSS pixels thick. The indicator must also have an area equal to or greater than a 1 CSS pixel border of the focused control.',
    wcagCriterion: '2.4.9 Focus Appearance (Minimum)',
    wcagLevel: 'AA',
    category: 'Navigation',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-minimum.html',
    rating: 97
  },
  {
    id: '65',
    question: 'Which implementation best supports WCAG 2.2 Success Criterion 3.3.8 Accessible Authentication?',
    options: [
      'Using CAPTCHAs with audio alternatives',
      'Requiring password memorization only',
      'Providing alternative authentication methods',
      'Implementing biometric authentication only'
    ],
    correctAnswer: 'Providing alternative authentication methods',
    explanation: 'SC 3.3.8 requires that an authentication process requiring cognitive function tests (like remembering a password) provides at least one alternative method that does not require cognitive function tests, unless the cognitive function test is essential.',
    wcagCriterion: '3.3.8 Accessible Authentication',
    wcagLevel: 'AA',
    category: 'Forms',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication.html',
    rating: 98
  },
  {
    id: '66',
    question: 'Which implementation best supports WCAG 2.2 Success Criterion 2.5.5 Target Size (Enhanced)?',
    options: [
      'Using 24x24 pixel targets with spacing',
      'Implementing 44x44 pixel minimum targets',
      'Providing 48x48 pixel targets with spacing',
      'Using variable target sizes based on device'
    ],
    correctAnswer: 'Providing 48x48 pixel targets with spacing',
    explanation: 'SC 2.5.5 Target Size (Enhanced) requires pointer targets to be at least 48x48 CSS pixels, except when the target is inline, an alternative is available, the size is determined by the user agent, or the large size would invalidate the presentation.',
    wcagCriterion: '2.5.5 Target Size (Enhanced)',
    wcagLevel: 'AAA',
    category: 'Mobile Accessibility',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html',
    rating: 97
  },
  {
    id: '67',
    question: 'Which implementation best supports WCAG 2.2 Success Criterion 2.5.1 Pointer Gestures?',
    options: [
      'Using multipoint gestures with no alternatives',
      'Providing single-point alternatives for all path-based gestures',
      'Requiring complex gestures for essential functions',
      'Supporting touch-only interactions'
    ],
    correctAnswer: 'Providing single-point alternatives for all path-based gestures',
    explanation: 'SC 2.5.1 requires that all functionality using multipoint or path-based gestures can be operated with a single pointer without a path-based gesture, unless such a gesture is essential. This ensures users with mobility impairments can access all features.',
    wcagCriterion: '2.5.1 Pointer Gestures',
    wcagLevel: 'A',
    category: 'Input Methods',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html',
    rating: 97
  },
  {
    id: '68',
    question: 'Which implementation best supports WCAG 2.2 Success Criterion 2.5.2 Pointer Cancellation?',
    options: [
      'Executing functions on the down-event only',
      'Completing actions only on the up-event',
      'Using both down and up events for all interactions',
      'Requiring double-tap for all actions'
    ],
    correctAnswer: 'Completing actions only on the up-event',
    explanation: 'SC 2.5.2 requires that functions are completed on the up-event and can be aborted or undone. This allows users to move away from a target without triggering an action, essential for users with motor control difficulties.',
    wcagCriterion: '2.5.2 Pointer Cancellation',
    wcagLevel: 'A',
    category: 'Input Methods',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html',
    rating: 96
  },
  {
    id: '69',
    question: 'Which implementation best supports WCAG 2.2 Success Criterion 2.5.4 Motion Actuation?',
    options: [
      'Using device motion as the only input method',
      'Providing user interface controls for motion-activated features',
      'Requiring device orientation changes for essential functions',
      'Implementing shake gestures with no alternatives'
    ],
    correctAnswer: 'Providing user interface controls for motion-activated features',
    explanation: 'SC 2.5.4 requires that functionality triggered by device motion can also be operated through user interface components and can be disabled to prevent accidental activation, unless the motion is essential for the function.',
    wcagCriterion: '2.5.4 Motion Actuation',
    wcagLevel: 'A',
    category: 'Input Methods',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html',
    rating: 97
  },
  {
    id: '70',
    question: 'Which implementation best supports WCAG 2.2 Success Criterion 3.2.7 Visible Controls?',
    options: [
      'Showing controls only on hover',
      'Making controls visible without pointer hover or keyboard focus',
      'Revealing controls through keyboard shortcuts',
      'Using gesture-based control activation'
    ],
    correctAnswer: 'Making controls visible without pointer hover or keyboard focus',
    explanation: 'SC 3.2.7 requires that user interface components be visible without requiring pointer hover or keyboard focus, except when hiding controls is essential or they are maintained through user preferences. This ensures discoverable controls for all users.',
    wcagCriterion: '3.2.7 Visible Controls',
    wcagLevel: 'AA',
    category: 'Navigation',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/visible-controls.html',
    rating: 98
  },
  {
    id: '71',
    question: 'Which implementation best supports WCAG 2.2 Success Criterion 3.3.9 Accessible Authentication (Enhanced)?',
    options: [
      'Using CAPTCHA with multiple alternatives',
      'Requiring two-factor authentication for all users',
      'Providing authentication without cognitive tests',
      'Implementing password-only authentication'
    ],
    correctAnswer: 'Providing authentication without cognitive tests',
    explanation: 'SC 3.3.9 requires that users can complete authentication without performing any cognitive function tests. This is more stringent than the minimum requirement, ensuring maximum accessibility for users with cognitive disabilities.',
    wcagCriterion: '3.3.9 Accessible Authentication (Enhanced)',
    wcagLevel: 'AAA',
    category: 'Forms',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced.html',
    rating: 97
  },
  {
    id: '72',
    question: 'Which implementation best supports WCAG 2.2 Success Criterion 2.4.11 Focus Not Obscured (Minimum)?',
    options: [
      'Using transparent overlays for focused elements',
      'Ensuring focus indicators are partially visible',
      'Making the entire focus indicator visible',
      'Showing focus only on keyboard interaction'
    ],
    correctAnswer: 'Making the entire focus indicator visible',
    explanation: 'SC 2.4.11 requires that when a user interface component receives keyboard focus, the entire focus indicator remains visible and is not obscured by author-created content. This ensures users can always see the focused element.',
    wcagCriterion: '2.4.11 Focus Not Obscured (Minimum)',
    wcagLevel: 'AA',
    category: 'Navigation',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html',
    rating: 96
  },
  {
    id: '73',
    question: 'Which implementation best supports WCAG 2.2 Success Criterion 2.5.8 Target Size (Minimum)?',
    options: [
      'Using 24x24 pixel targets for all interactive elements',
      'Implementing 44x44 pixel targets with adequate spacing',
      'Providing 32x32 pixel targets with hover expansion',
      'Using variable target sizes based on device type'
    ],
    correctAnswer: 'Implementing 44x44 pixel targets with adequate spacing',
    explanation: 'SC 2.5.8 requires pointer targets to be at least 44x44 CSS pixels, unless an alternative is available, the target is inline, or the size is determined by the user agent. This ensures targets are large enough for users with motor impairments.',
    wcagCriterion: '2.5.8 Target Size (Minimum)',
    wcagLevel: 'AA',
    category: 'Mobile Accessibility',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html',
    rating: 98
  },
  {
    id: '74',
    question: 'Which implementation best supports WCAG 2.2 Success Criterion 3.3.7 Redundant Entry?',
    options: [
      'Requiring data reentry for verification',
      'Auto-populating previously entered information',
      'Clearing form fields after validation errors',
      'Storing data only in session storage'
    ],
    correctAnswer: 'Auto-populating previously entered information',
    explanation: 'SC 3.3.7 requires that information previously entered by the user is either auto-populated or available for selection, unless re-entering is essential. This reduces cognitive load and potential for errors during form completion.',
    wcagCriterion: '3.3.7 Redundant Entry',
    wcagLevel: 'A',
    category: 'Forms',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html',
    rating: 97
  },
  {
    id: '75',
    question: 'What is the minimum target size requirement according to WCAG 2.2 SC 2.5.8?',
    options: [
      '16 x 16 CSS pixels',
      '20 x 20 CSS pixels',
      '24 x 24 CSS pixels',
      '44 x 44 CSS pixels'
    ],
    correctAnswer: '24 x 24 CSS pixels',
    explanation: 'WCAG 2.2 Success Criterion 2.5.8 Target Size (Minimum) requires a target size of at least 24 x 24 CSS pixels for pointer inputs, unless an alternative means is provided, the target is inline, or the size is determined by the user agent and not modified.',
    wcagCriterion: '2.5.8 Target Size (Minimum)',
    wcagLevel: 'AA',
    category: 'Mobile Accessibility',
    difficulty: 'intermediate',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html',
    rating: 96
  },
  {
    id: '76',
    question: 'According to WCAG-EM methodology, what is the first step in the evaluation process?',
    options: [
      'Select a representative sample',
      'Explore the target website',
      'Define the evaluation scope',
      'Run automated tests'
    ],
    correctAnswer: 'Explore the target website',
    explanation: 'According to WCAG-EM methodology, exploring the target website is a crucial step that must be completed before selecting a representative sample. This exploration helps understand the functionality of the website, technologies used, and different types of web pages and web page states.',
    wasBoKDomain: 'Domain Two: Identify accessibility issues in web solutions',
    wasBoKSection: 'Domain Two A: Testing process and test plan',
    category: 'Testing',
    difficulty: 'intermediate',
    rating: 97
  },
  {
    id: '77',
    question: 'Which implementation best supports WCAG 2.2 Success Criterion 2.5.7 Dragging Movements?',
    options: [
      'Requiring drag operations for all sorting functionality',
      'Providing button alternatives for drag operations',
      'Using touch-only drag and drop interfaces',
      'Implementing drag operations without keyboard support'
    ],
    correctAnswer: 'Providing button alternatives for drag operations',
    explanation: 'SC 2.5.7 requires that all functionality using dragging movements can be achieved through single pointer interactions without dragging, unless dragging is essential. This ensures users with mobility impairments can access all features.',
    wcagCriterion: '2.5.7 Dragging Movements',
    wcagLevel: 'AA',
    category: 'Input Methods',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html',
    rating: 96
  },
  {
    id: '78',
    question: 'Which implementation best supports WCAG 2.2 Success Criterion 3.3.8 Accessible Authentication (Minimum)?',
    options: [
      'Using CAPTCHAs with audio alternatives',
      'Requiring complex password memorization',
      'Providing authentication without memory tests',
      'Implementing biometric-only authentication'
    ],
    correctAnswer: 'Providing authentication without memory tests',
    explanation: 'SC 3.3.8 requires that authentication processes have at least one method that does not require users to memorize or transcribe information, unless this is essential. This supports users with cognitive disabilities who may struggle with memory tasks.',
    wcagCriterion: '3.3.8 Accessible Authentication (Minimum)',
    wcagLevel: 'AA',
    category: 'Forms',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html',
    rating: 97
  },
  {
    id: '79',
    question: 'Which implementation best supports WCAG 2.2 Success Criterion 2.4.12 Focus Not Obscured (Enhanced)?',
    options: [
      'Ensuring partial visibility of focused elements',
      'Making the entire focused element visible without scrolling',
      'Using semi-transparent overlays for focus indicators',
      'Showing focus indicators only on keyboard interaction'
    ],
    correctAnswer: 'Making the entire focused element visible without scrolling',
    explanation: 'SC 2.4.11 requires that when a user interface component receives keyboard focus, no part of the focus indicator is hidden by author-created content. This ensures users can always see which element has focus.',
    wcagCriterion: '2.4.12 Focus Not Obscured (Enhanced)',
    wcagLevel: 'AAA',
    category: 'Navigation',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html',
    rating: 98
  },
  {
    id: '80',
    question: 'Which implementation best supports WCAG 2.2 Success Criterion 2.5.5 Target Size (Enhanced)?',
    options: [
      'Using 44x44 pixel targets with spacing',
      'Implementing 48x48 pixel targets with adequate spacing',
      'Providing 32x32 pixel targets with hover expansion',
      'Using variable target sizes based on device type'
    ],
    correctAnswer: 'Implementing 48x48 pixel targets with adequate spacing',
    explanation: 'SC 2.5.5 Target Size (Enhanced) requires pointer targets to be at least 48x48 CSS pixels, except when the target is inline, an alternative is available, the size is determined by the user agent, or the presentation cannot be changed.',
    wcagCriterion: '2.5.5 Target Size (Enhanced)',
    wcagLevel: 'AAA',
    category: 'Mobile Accessibility',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html',
    rating: 97
  },
  {
    id: '81',
    question: 'Which approach best supports accessibility when implementing custom controls according to WASBoK Domain One F?',
    options: [
      'Using native HTML elements with custom styling',
      'Creating div elements with click handlers',
      'Implementing custom controls from scratch',
      'Using images for interactive elements'
    ],
    correctAnswer: 'Using native HTML elements with custom styling',
    explanation: 'According to WASBoK Domain One F, using native HTML elements with custom styling is the preferred approach as it inherits built-in accessibility features, keyboard support, and proper semantics. This reduces the risk of accessibility issues compared to building custom controls from scratch.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One F: Standard controls vs. custom controls',
    category: 'Development',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '82',
    question: 'Which testing approach best identifies accessibility issues for users with cognitive disabilities according to WASBoK Domain Two C?',
    options: [
      'Using automated testing tools exclusively',
      'Testing with expert screen reader users',
      'Conducting tests with diverse cognitive disability profiles',
      'Relying on WCAG success criteria validation'
    ],
    correctAnswer: 'Conducting tests with diverse cognitive disability profiles',
    explanation: 'WASBoK Domain Two C emphasizes the importance of testing with users who have different types of cognitive disabilities to identify issues related to memory, attention, comprehension, and executive function. This approach reveals barriers that might not be apparent through other testing methods.',
    wasBoKDomain: 'Domain Two: Identify accessibility issues in web solutions',
    wasBoKSection: 'Domain Two C: Testing with assistive technologies',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '83',
    question: 'According to WASBoK Domain One D, which ARIA implementation best supports the accessibility tree?',
    options: [
      'Using aria-label on all elements',
      'Maintaining DOM order matching visual order',
      'Adding role="presentation" to structural elements',
      'Implementing complex ARIA without native HTML'
    ],
    correctAnswer: 'Maintaining DOM order matching visual order',
    explanation: 'WASBoK Domain One D emphasizes that the accessibility tree should reflect the logical reading order, with DOM structure matching visual presentation. This ensures consistent information presentation across visual and programmatic interfaces.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One D: Using ARIA',
    category: 'ARIA',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '84',
    question: 'Which procurement practice best integrates accessibility according to WASBoK Domain Three C?',
    options: [
      'Reviewing accessibility after purchase',
      'Including accessibility requirements in initial RFPs',
      'Relying on vendor accessibility statements',
      'Testing products after deployment'
    ],
    correctAnswer: 'Including accessibility requirements in initial RFPs',
    explanation: 'WASBoK Domain Three C emphasizes that accessibility requirements must be included in the initial Request for Proposal (RFP) documents. This ensures vendors understand accessibility expectations from the start and allows for proper evaluation of their capabilities.',
    wasBoKDomain: 'Domain Three: Remediating issues in web solutions',
    wasBoKSection: 'Domain Three C: Integrate Accessibility into the Procurement Process',
    category: 'Procurement',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '85',
    question: 'Which strategy best supports users without vision according to WASBoK Domain One H?',
    options: [
      'Providing audio descriptions for all content',
      'Implementing consistent navigation patterns',
      'Using color coding for information',
      'Adding hover effects to elements'
    ],
    correctAnswer: 'Implementing consistent navigation patterns',
    explanation: 'WASBoK Domain One H emphasizes that users without vision rely heavily on consistent navigation patterns, including proper heading structure, landmarks, and predictable page organization. This allows them to build mental models of websites and navigate efficiently.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One H: Strategies of persons with disabilities in using web solutions',
    category: 'Screen Reader Navigation',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '86',
    question: 'Which quality assurance practice best supports accessibility according to WASBoK Domain Two E?',
    options: [
      'Conducting accessibility testing after development',
      'Integrating accessibility checks throughout development',
      'Relying on automated testing tools',
      'Testing only with screen readers'
    ],
    correctAnswer: 'Integrating accessibility checks throughout development',
    explanation: 'WASBoK Domain Two E emphasizes the importance of integrating accessibility testing throughout the development process. This approach helps identify and address issues early, reducing the cost and effort of remediation compared to testing only after development.',
    wasBoKDomain: 'Domain Two: Identify accessibility issues in web solutions',
    wasBoKSection: 'Domain Two E: Accessibility quality assurance',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '87',
    question: 'Which approach best supports users with motor disabilities according to WASBoK Domain One H?',
    options: [
      'Requiring precise timing for interactions',
      'Supporting multiple input methods',
      'Using small touch targets',
      'Implementing gesture-only controls'
    ],
    correctAnswer: 'Supporting multiple input methods',
    explanation: 'WASBoK Domain One H emphasizes that users with motor disabilities benefit from support for multiple input methods, including keyboard, switch devices, voice control, and other assistive technologies. This flexibility ensures access regardless of physical capabilities.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One H: Strategies of persons with disabilities in using web solutions',
    category: 'Input Methods',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '88',
    question: 'Which testing approach best identifies keyboard accessibility issues according to WASBoK Domain Two F?',
    options: [
      'Visual inspection of focus indicators',
      'Comprehensive keyboard interaction testing',
      'Automated focus order checks',
      'Testing with mouse alternatives'
    ],
    correctAnswer: 'Comprehensive keyboard interaction testing',
    explanation: 'WASBoK Domain Two F emphasizes that thorough keyboard testing must include verification of focus order, trap prevention, operation of all controls, and visibility of focus indicators. This comprehensive approach ensures full keyboard accessibility.',
    wasBoKDomain: 'Domain Two: Identify accessibility issues in web solutions',
    wasBoKSection: 'Domain Two F: Testing with assistive technologies',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '89',
    question: 'Which implementation best supports single-page applications according to WASBoK Domain One G?',
    options: [
      'Using page refresh for navigation',
      'Managing focus and announcing updates',
      'Relying on visual transitions only',
      'Implementing automatic page reloads'
    ],
    correctAnswer: 'Managing focus and announcing updates',
    explanation: 'WASBoK Domain One G emphasizes that single-page applications must manage focus appropriately and announce dynamic content updates to support screen reader users. This ensures users are aware of changes and can maintain their context during navigation.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One G: Single page applications',
    category: 'Development',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '90',
    question: 'Which approach best supports users with limited reading capabilities according to WASBoK Domain One H?',
    options: [
      'Using complex technical language',
      'Providing clear, simple content structure',
      'Requiring rapid reading comprehension',
      'Using text-heavy designs'
    ],
    correctAnswer: 'Providing clear, simple content structure',
    explanation: 'WASBoK Domain One H emphasizes that users with limited reading capabilities benefit from clear content structure, simple language, consistent navigation, and proper heading hierarchy. This supports better comprehension and reduces cognitive load.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One H: Strategies of persons with disabilities in using web solutions',
    category: 'Content',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '91',
    question: 'Which approach best supports interoperability according to WASBoK Domain Two A?',
    options: [
      'Testing with a single browser version',
      'Verifying compatibility across platforms',
      'Using browser-specific features',
      'Implementing proprietary solutions'
    ],
    correctAnswer: 'Verifying compatibility across platforms',
    explanation: 'WASBoK Domain Two A emphasizes the importance of testing across different platforms, browsers, and assistive technologies to ensure interoperability. This comprehensive approach helps identify and address compatibility issues that could affect accessibility.',
    wasBoKDomain: 'Domain Two: Identify accessibility issues in web solutions',
    wasBoKSection: 'Domain Two A: Interoperability and compatibility issues',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '92',
    question: 'Which screen reader testing strategy is most effective according to WASBoK Domain Two F?',
    options: [
      'Testing with a single screen reader',
      'Using automated screen reader simulators',
      'Testing with multiple screen readers and browsers',
      'Relying on developer mode in screen readers'
    ],
    correctAnswer: 'Testing with multiple screen readers and browsers',
    explanation: 'WASBoK Domain Two F emphasizes the importance of testing with multiple screen reader and browser combinations to ensure broad compatibility. Different screen readers may handle content differently, making comprehensive testing essential.',
    wasBoKDomain: 'Domain Two: Identify accessibility issues in web solutions',
    wasBoKSection: 'Domain Two F: Testing with assistive technologies',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '93',
    question: 'Which approach best supports users with auditory disabilities according to WASBoK Domain One H?',
    options: [
      'Providing audio-only content',
      'Using sound effects for notifications',
      'Offering text alternatives for audio content',
      'Implementing automatic audio playback'
    ],
    correctAnswer: 'Offering text alternatives for audio content',
    explanation: 'WASBoK Domain One H emphasizes that users with auditory disabilities require text alternatives for audio content, including captions for videos and transcripts for audio-only content. This ensures access to all information regardless of hearing ability.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One H: Strategies of persons with disabilities in using web solutions',
    category: 'Multimedia',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '94',
    question: 'Which implementation best supports device independence according to WASBoK Domain One B?',
    options: [
      'Using mouse-specific events only',
      'Implementing device-independent event handlers',
      'Requiring touch input for all interactions',
      'Supporting keyboard-only operation'
    ],
    correctAnswer: 'Implementing device-independent event handlers',
    explanation: 'WASBoK Domain One B emphasizes the importance of device-independent event handlers that work across different input methods. This ensures functionality is available regardless of how users interact with the content.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One B: Basic knowledge of programming',
    category: 'Development',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '95',
    question: 'Which approach best supports fixing versus redesigning according to WASBoK Domain Three B?',
    options: [
      'Always choosing quick fixes',
      'Evaluating systemic impact before deciding',
      'Automatically opting for redesign',
      'Implementing temporary solutions'
    ],
    correctAnswer: 'Evaluating systemic impact before deciding',
    explanation: 'WASBoK Domain Three B emphasizes the importance of evaluating the systemic impact of accessibility issues before deciding between fixes and redesign. This approach ensures sustainable solutions that address root causes rather than symptoms.',
    wasBoKDomain: 'Domain Three: Remediating issues in web solutions',
    wasBoKSection: 'Domain Three B: Recommending strategies and/or techniques for fixing issues',
    category: 'Remediation',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '96',
    question: 'Which testing approach best identifies issues for touch users according to WASBoK Domain Two C?',
    options: [
      'Testing only on desktop devices',
      'Verifying touch target size and spacing',
      'Using mouse emulation for touch',
      'Implementing gesture-only controls'
    ],
    correctAnswer: 'Verifying touch target size and spacing',
    explanation: 'WASBoK Domain Two C emphasizes the importance of verifying adequate touch target size and spacing for mobile accessibility. This includes checking for sufficient target size, appropriate spacing between targets, and alternative methods for complex gestures.',
    wasBoKDomain: 'Domain Two: Identify accessibility issues in web solutions',
    wasBoKSection: 'Domain Two C: Testing with assistive technologies',
    category: 'Mobile Accessibility',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '97',
    question: 'Which approach best supports ACT Rules implementation according to WASBoK Domain Two D?',
    options: [
      'Using automated tools exclusively',
      'Combining automated and manual testing',
      'Relying on manual testing only',
      'Implementing random testing procedures'
    ],
    correctAnswer: 'Combining automated and manual testing',
    explanation: 'WASBoK Domain Two D emphasizes that ACT Rules implementation requires both automated and manual testing approaches. While automated tools can check some rules, manual testing is essential for aspects requiring human judgment.',
    wasBoKDomain: 'Domain Two: Identify accessibility issues in web solutions',
    wasBoKSection: 'Domain Two D: Testing tools for the web',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '98',
    question: 'Which approach best supports users with low vision according to WASBoK Domain One H?',
    options: [
      'Using fixed font sizes only',
      'Supporting text resizing and reflow',
      'Implementing automatic zoom',
      'Requiring screen magnification'
    ],
    correctAnswer: 'Supporting text resizing and reflow',
    explanation: 'WASBoK Domain One H emphasizes that users with low vision need the ability to resize text without loss of functionality and content that reflows properly. This ensures content remains readable and usable at different zoom levels.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One H: Strategies of persons with disabilities in using web solutions',
    category: 'Visual Design',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '99',
    question: 'Which procurement maturity model practice best supports accessibility according to WASBoK Domain Three C?',
    options: [
      'Conducting post-purchase testing only',
      'Implementing systematic accessibility requirements',
      'Relying on vendor statements',
      'Testing final products only'
    ],
    correctAnswer: 'Implementing systematic accessibility requirements',
    explanation: 'WASBoK Domain Three C emphasizes the importance of implementing systematic accessibility requirements throughout the procurement process. This includes clear requirements, evaluation criteria, and verification procedures at each stage.',
    wasBoKDomain: 'Domain Three: Remediating issues in web solutions',
    wasBoKSection: 'Domain Three C: Integrate Accessibility into the Procurement Process',
    category: 'Procurement',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '100',
    question: 'Which approach best supports cognitive function tests in authentication according to WASBoK Domain One H?',
    options: [
      'Requiring complex password patterns',
      'Providing alternatives to memory-based authentication',
      'Using timed CAPTCHA challenges',
      'Implementing pattern recognition tests'
    ],
    correctAnswer: 'Providing alternatives to memory-based authentication',
    explanation: 'WASBoK Domain One H emphasizes that users with cognitive disabilities need alternatives to authentication methods that rely heavily on memory or complex cognitive functions. This ensures access while maintaining security.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One H: Strategies of persons with disabilities in using web solutions',
    category: 'Forms',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '101',
    question: 'Which of the following is NOT a primary goal of the Web Accessibility Standards Body of Knowledge (WASBoK)?',
    options: [
      'Providing a comprehensive framework for understanding web accessibility',
      'Establishing a standardized certification process for accessibility professionals',
      'Organizing accessibility knowledge into clear domains and topics',
      'Supporting the development of accessibility training and education'
    ],
    correctAnswer: 'Establishing a standardized certification process for accessibility professionals',
    explanation: 'The WASBoK aims to provide a framework for understanding web accessibility, organize knowledge into domains and topics, and support training development. While it may inform certification programs, establishing certification processes is not a primary goal.',
    wasBoKDomain: 'Introduction to Web Accessibility',
    wasBoKSection: 'Overview and Fundamentals',
    category: 'WASBoK',
    difficulty: 'intermediate',
    rating: 95
  },
  {
    id: '102',
    question: 'Which testing approach best supports end-user impact evaluation according to WASBoK Domain Two G?',
    options: [
      'Conducting automated tests only',
      'Testing with diverse user groups and scenarios',
      'Using expert evaluations exclusively',
      'Implementing standard test cases'
    ],
    correctAnswer: 'Testing with diverse user groups and scenarios',
    explanation: 'WASBoK Domain Two G emphasizes the importance of testing with diverse user groups in realistic scenarios to understand actual user impact. This approach reveals issues that might not be apparent through other testing methods.',
    wasBoKDomain: 'Domain Two: Identify accessibility issues in web solutions',
    wasBoKSection: 'Domain Two G: Testing for end-user impact',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '103',
    question: 'Which approach best supports semantic HTML implementation according to WASBoK Domain One B?',
    options: [
      'Using div elements for all structure',
      'Implementing native HTML elements appropriately',
      'Relying on ARIA for all semantics',
      'Creating custom elements exclusively'
    ],
    correctAnswer: 'Implementing native HTML elements appropriately',
    explanation: 'WASBoK Domain One B emphasizes using native HTML elements for their intended purpose to provide proper semantics. This ensures better accessibility support and reduces the need for complex ARIA implementations.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One B: Basic knowledge of programming',
    category: 'Development',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '104',
    question: 'Which approach best supports accessibility conformance reporting according to WASBoK Domain Three C?',
    options: [
      'Providing general compliance statements',
      'Documenting detailed testing results and methods',
      'Using automated test results only',
      'Relying on vendor documentation'
    ],
    correctAnswer: 'Documenting detailed testing results and methods',
    explanation: 'WASBoK Domain Three C emphasizes the importance of detailed accessibility conformance reports that include testing methodologies, results, and specific findings. This provides transparency and actionable information for remediation.',
    wasBoKDomain: 'Domain Three: Remediating issues in web solutions',
    wasBoKSection: 'Domain Three C: Integrate Accessibility into the Procurement Process',
    category: 'Documentation',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '105',
    question: 'Which implementation best supports dynamic content accessibility according to WASBoK Domain One B?',
    options: [
      'Using automatic content updates',
      'Managing focus and providing notifications',
      'Implementing continuous content refresh',
      'Relying on visual indicators only'
    ],
    correctAnswer: 'Managing focus and providing notifications',
    explanation: 'WASBoK Domain One B emphasizes the importance of managing focus and providing appropriate notifications for dynamic content updates. This ensures users are aware of changes and can maintain their context.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One B: Basic knowledge of programming',
    category: 'Development',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '106',
    question: 'Which approach best supports issue prioritization according to WASBoK Domain Three A?',
    options: [
      'Fixing all Level A issues first',
      'Prioritizing based on user impact and frequency',
      'Following development team preferences',
      'Addressing visual issues first'
    ],
    correctAnswer: 'Prioritizing based on user impact and frequency',
    explanation: 'WASBoK Domain Three A emphasizes prioritizing accessibility issues based on their impact on users and how frequently they affect user interactions. This ensures the most significant barriers are addressed first.',
    wasBoKDomain: 'Domain Three: Remediating issues in web solutions',
    wasBoKSection: 'Domain Three A: Level of severity and prioritization of issues',
    category: 'Remediation',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '107',
    question: 'Which testing approach best supports usability evaluation according to WASBoK Domain Two F?',
    options: [
      'Conducting automated usability scans',
      'Testing with real users in realistic scenarios',
      'Using expert reviews exclusively',
      'Implementing standard test scripts'
    ],
    correctAnswer: 'Testing with real users in realistic scenarios',
    explanation: 'WASBoK Domain Two F emphasizes the importance of testing with real users in realistic scenarios to evaluate usability. This approach reveals actual usage patterns and barriers that might not be apparent through other methods.',
    wasBoKDomain: 'Domain Two: Identify accessibility issues in web solutions',
    wasBoKSection: 'Domain Two F: Testing with assistive technologies',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '108',
    question: 'Which approach best supports state management according to WASBoK Domain One B?',
    options: [
      'Using visual indicators only',
      'Implementing proper ARIA states and properties',
      'Relying on color changes',
      'Managing state through CSS classes'
    ],
    correctAnswer: 'Implementing proper ARIA states and properties',
    explanation: 'WASBoK Domain One B emphasizes the importance of using appropriate ARIA states and properties to manage and communicate component states. This ensures state changes are properly conveyed to assistive technologies.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One B: Basic knowledge of programming',
    category: 'Development',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '109',
    question: 'Which approach best supports automated testing tool implementation according to WASBoK Domain Two D?',
    options: [
      'Replacing manual testing entirely',
      'Using tools as part of a comprehensive strategy',
      'Running automated tests after deployment',
      'Implementing random automated checks'
    ],
    correctAnswer: 'Using tools as part of a comprehensive strategy',
    explanation: 'WASBoK Domain Two D emphasizes that automated testing tools should be part of a comprehensive testing strategy, not a replacement for manual testing. Tools help identify potential issues but require human verification.',
    wasBoKDomain: 'Domain Two: Identify accessibility issues in web solutions',
    wasBoKSection: 'Domain Two D: Testing tools for the web',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '110',
    question: 'Which approach best supports accessibility in the procurement process according to WASBoK Domain Three C?',
    options: [
      'Reviewing accessibility after purchase',
      'Including accessibility throughout procurement',
      'Relying on vendor certifications',
      'Testing final products only'
    ],
    correctAnswer: 'Including accessibility throughout procurement',
    explanation: 'WASBoK Domain Three C emphasizes integrating accessibility requirements throughout the procurement process, from initial requirements to final acceptance. This ensures accessibility is considered at every stage.',
    wasBoKDomain: 'Domain Three: Remediating issues in web solutions',
    wasBoKSection: 'Domain Three C: Integrate Accessibility into the Procurement Process',
    category: 'Procurement',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '111',
    question: 'Which approach best supports cognitive accessibility testing according to WASBoK Domain Two E?',
    options: [
      'Using only automated testing tools',
      'Testing with users having diverse cognitive abilities',
      'Relying on developer intuition',
      'Following standard test scripts'
    ],
    correctAnswer: 'Testing with users having diverse cognitive abilities',
    explanation: 'WASBoK Domain Two E emphasizes the importance of testing with users who have different cognitive abilities to identify potential barriers. This approach helps ensure content is perceivable and operable for users with various cognitive needs.',
    wasBoKDomain: 'Domain Two: Identify accessibility issues in web solutions',
    wasBoKSection: 'Domain Two E: Testing for cognitive disabilities',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '112',
    question: 'Which approach best supports mobile accessibility testing according to WASBoK Domain Two C?',
    options: [
      'Testing only on the latest devices',
      'Testing with various input methods and orientations',
      'Using desktop emulators exclusively',
      'Following desktop testing procedures'
    ],
    correctAnswer: 'Testing with various input methods and orientations',
    explanation: 'WASBoK Domain Two C emphasizes testing with different input methods and device orientations to ensure mobile accessibility. This includes touch gestures, screen rotation, and various interaction patterns.',
    wasBoKDomain: 'Domain Two: Identify accessibility issues in web solutions',
    wasBoKSection: 'Domain Two C: Testing for mobile accessibility',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '113',
    question: 'Which approach best supports accessibility in single-page applications according to WASBoK Domain One B?',
    options: [
      'Disabling client-side routing',
      'Managing focus and announcing updates',
      'Relying on page refreshes',
      'Using only server-side rendering'
    ],
    correctAnswer: 'Managing focus and announcing updates',
    explanation: 'WASBoK Domain One B emphasizes managing focus and announcing dynamic updates in single-page applications. This ensures users can track content changes and maintain their context during client-side navigation.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One B: Basic knowledge of programming',
    category: 'Development',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '114',
    question: 'Which approach best supports accessibility documentation according to WASBoK Domain Three B?',
    options: [
      'Creating general guidelines',
      'Documenting specific techniques and patterns',
      'Referencing external resources',
      'Using automated documentation'
    ],
    correctAnswer: 'Documenting specific techniques and patterns',
    explanation: 'WASBoK Domain Three B emphasizes documenting specific accessibility techniques and patterns that work in your context. This helps maintain consistency and provides clear guidance for implementation.',
    wasBoKDomain: 'Domain Three: Remediating issues in web solutions',
    wasBoKSection: 'Domain Three B: Fixing versus redesigning',
    category: 'Documentation',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '115',
    question: 'Which approach best supports accessibility in rich internet applications according to WASBoK Domain One B?',
    options: [
      'Using only native HTML elements',
      'Implementing proper ARIA patterns',
      'Avoiding JavaScript functionality',
      'Relying on browser defaults'
    ],
    correctAnswer: 'Implementing proper ARIA patterns',
    explanation: 'WASBoK Domain One B emphasizes implementing appropriate ARIA patterns for rich internet applications. This ensures complex widgets and interactions are properly exposed to assistive technologies.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One B: Basic knowledge of programming',
    category: 'Development',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '116',
    question: 'Which approach best supports accessibility in the development process according to WASBoK Domain One A?',
    options: [
      'Testing after development',
      'Integrating accessibility throughout development',
      'Adding accessibility features last',
      'Delegating to specialists only'
    ],
    correctAnswer: 'Integrating accessibility throughout development',
    explanation: 'WASBoK Domain One A emphasizes integrating accessibility considerations throughout the development process. This ensures accessibility is built-in rather than bolted on as an afterthought.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One A: Basic knowledge of disabilities',
    category: 'Development',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '117',
    question: 'Which approach best supports accessibility testing in agile development according to WASBoK Domain Two A?',
    options: [
      'Testing only at sprint end',
      'Integrating testing throughout sprints',
      'Deferring testing to release',
      'Testing in separate sprints'
    ],
    correctAnswer: 'Integrating testing throughout sprints',
    explanation: 'WASBoK Domain Two A emphasizes integrating accessibility testing throughout agile sprints. This allows early identification and remediation of issues, reducing technical debt.',
    wasBoKDomain: 'Domain Two: Identify accessibility issues in web solutions',
    wasBoKSection: 'Domain Two A: Testing process and test plan',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '118',
    question: 'Which approach best supports multimedia accessibility according to WASBoK Domain One C?',
    options: [
      'Providing transcripts only',
      'Using automated captions',
      'Implementing multiple alternatives',
      'Relying on player controls'
    ],
    correctAnswer: 'Implementing multiple alternatives',
    explanation: 'WASBoK Domain One C emphasizes providing multiple alternatives for multimedia content, including captions, transcripts, and audio descriptions. This ensures access for users with different needs and preferences.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One C: Content authoring',
    category: 'Content',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '119',
    question: 'Which approach best supports accessibility in responsive design according to WASBoK Domain One B?',
    options: [
      'Using fixed layouts',
      'Maintaining content relationships across viewports',
      'Hiding content on mobile',
      'Implementing separate mobile sites'
    ],
    correctAnswer: 'Maintaining content relationships across viewports',
    explanation: 'WASBoK Domain One B emphasizes maintaining content relationships and functionality across different viewports in responsive design. This ensures consistent accessibility regardless of screen size.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One B: Basic knowledge of programming',
    category: 'Development',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '120',
    question: 'Which approach best supports accessibility in user experience design according to WASBoK Domain One D?',
    options: [
      'Following visual design trends',
      'Incorporating diverse user needs from start',
      'Adding accessibility features later',
      'Using standard templates only'
    ],
    correctAnswer: 'Incorporating diverse user needs from start',
    explanation: 'WASBoK Domain One D emphasizes incorporating diverse user needs into UX design from the beginning. This ensures inclusive design that works well for users with different abilities and preferences.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One D: User experience',
    category: 'Design',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '121',
    question: 'According to WASBoK Domain One, which practice best supports creating accessible web solutions?',
    options: [
      'Adding accessibility features after development',
      'Incorporating accessibility throughout the development lifecycle',
      'Focusing only on technical implementation',
      'Relying solely on automated testing'
    ],
    correctAnswer: 'Incorporating accessibility throughout the development lifecycle',
    explanation: 'WASBoK Domain One emphasizes that accessibility should be integrated throughout the entire development lifecycle, from planning to implementation and testing, rather than being added as an afterthought.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One A: Planning',
    category: 'Development Process',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '122',
    question: 'Which approach aligns with WASBoK Domain One\'s principles for content authoring?',
    options: [
      'Using visual styling to convey meaning',
      'Implementing semantic structure with proper heading hierarchy',
      'Relying on color to indicate status',
      'Using decorative images without alternatives'
    ],
    correctAnswer: 'Implementing semantic structure with proper heading hierarchy',
    explanation: 'WASBoK Domain One emphasizes the importance of semantic structure in content authoring, including proper heading hierarchy, which ensures content is meaningful and navigable for all users.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One C: Content authoring',
    category: 'Content',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '123',
    question: 'According to WASBoK Domain One, which practice best supports user experience in accessible web solutions?',
    options: [
      'Designing for the majority of users',
      'Creating experiences that work for diverse user needs',
      'Focusing on visual aesthetics only',
      'Implementing standard patterns without variation'
    ],
    correctAnswer: 'Creating experiences that work for diverse user needs',
    explanation: 'WASBoK Domain One emphasizes that user experience should be designed to work for diverse user needs, including those with different abilities, preferences, and assistive technologies.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One D: User experience',
    category: 'Design',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '124',
    question: 'Which testing approach aligns with WASBoK Domain One\'s principles for quality assurance?',
    options: [
      'Relying solely on automated testing',
      'Using only manual testing methods',
      'Implementing a comprehensive testing strategy',
      'Testing only with screen readers'
    ],
    correctAnswer: 'Implementing a comprehensive testing strategy',
    explanation: 'WASBoK Domain One emphasizes the importance of a comprehensive testing strategy that includes both automated and manual testing methods, along with testing with various assistive technologies and user groups.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One E: Quality assurance',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '125',
    question: 'According to WASBoK Domain One, which practice best supports maintenance of accessible web solutions?',
    options: [
      'Updating content without checking accessibility',
      'Maintaining accessibility documentation and processes',
      'Focusing only on technical updates',
      'Ignoring accessibility in maintenance'
    ],
    correctAnswer: 'Maintaining accessibility documentation and processes',
    explanation: 'WASBoK Domain One emphasizes the importance of maintaining accessibility documentation and processes during maintenance to ensure continued compliance and usability for all users.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One F: Maintenance',
    category: 'Maintenance',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '126',
    question: 'Which practice best aligns with WASBoK Domain Two\'s principles for managing accessibility?',
    options: [
      'Implementing accessibility as a separate project',
      'Integrating accessibility into organizational processes',
      'Addressing accessibility issues reactively',
      'Focusing only on technical compliance'
    ],
    correctAnswer: 'Integrating accessibility into organizational processes',
    explanation: 'WASBoK Domain Two emphasizes that accessibility should be integrated into all organizational processes, from procurement to development and maintenance, rather than being treated as a separate concern.',
    wasBoKDomain: 'Domain Two: Managing Accessibility',
    wasBoKSection: 'Domain Two A: Organizational processes',
    category: 'Management',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '127',
    question: 'According to WASBoK Domain Two, which approach best supports accessibility policy development?',
    options: [
      'Creating policies without stakeholder input',
      'Developing policies based on legal requirements only',
      'Establishing comprehensive policies with stakeholder involvement',
      'Implementing policies without documentation'
    ],
    correctAnswer: 'Establishing comprehensive policies with stakeholder involvement',
    explanation: 'WASBoK Domain Two emphasizes the importance of developing comprehensive accessibility policies with input from all relevant stakeholders to ensure buy-in and effective implementation.',
    wasBoKDomain: 'Domain Two: Managing Accessibility',
    wasBoKSection: 'Domain Two B: Policy development',
    category: 'Policy',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '128',
    question: 'Which practice best aligns with WASBoK Domain Two\'s principles for accessibility training?',
    options: [
      'Providing one-time training sessions',
      'Implementing ongoing accessibility education programs',
      'Focusing only on technical training',
      'Training only development teams'
    ],
    correctAnswer: 'Implementing ongoing accessibility education programs',
    explanation: 'WASBoK Domain Two emphasizes the importance of implementing ongoing accessibility education programs that cover all aspects of accessibility and reach all relevant team members.',
    wasBoKDomain: 'Domain Two: Managing Accessibility',
    wasBoKSection: 'Domain Two C: Training and education',
    category: 'Training',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '129',
    question: 'According to WASBoK Domain Two, which approach best supports accessibility procurement?',
    options: [
      'Evaluating accessibility after purchase',
      'Including accessibility requirements in procurement criteria',
      'Focusing only on cost considerations',
      'Ignoring accessibility in procurement'
    ],
    correctAnswer: 'Including accessibility requirements in procurement criteria',
    explanation: 'WASBoK Domain Two emphasizes the importance of including accessibility requirements in procurement criteria to ensure purchased products and services meet accessibility standards.',
    wasBoKDomain: 'Domain Two: Managing Accessibility',
    wasBoKSection: 'Domain Two D: Procurement',
    category: 'Procurement',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '130',
    question: 'Which practice best aligns with WASBoK Domain Two\'s principles for accessibility monitoring?',
    options: [
      'Conducting annual audits only',
      'Implementing continuous monitoring and reporting',
      'Focusing only on technical monitoring',
      'Ignoring accessibility metrics'
    ],
    correctAnswer: 'Implementing continuous monitoring and reporting',
    explanation: 'WASBoK Domain Two emphasizes the importance of implementing continuous monitoring and reporting of accessibility metrics to ensure ongoing compliance and improvement.',
    wasBoKDomain: 'Domain Two: Managing Accessibility',
    wasBoKSection: 'Domain Two E: Monitoring and reporting',
    category: 'Monitoring',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '131',
    question: 'According to WASBoK Domain Three, which practice best supports accessibility advocacy?',
    options: [
      'Focusing only on technical advocacy',
      'Implementing comprehensive advocacy strategies',
      'Addressing advocacy reactively',
      'Ignoring stakeholder engagement'
    ],
    correctAnswer: 'Implementing comprehensive advocacy strategies',
    explanation: 'WASBoK Domain Three emphasizes the importance of implementing comprehensive advocacy strategies that address all aspects of accessibility and engage all relevant stakeholders.',
    wasBoKDomain: 'Domain Three: Advocating for Accessibility',
    wasBoKSection: 'Domain Three A: Advocacy strategies',
    category: 'Advocacy',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '132',
    question: 'Which approach best aligns with WASBoK Domain Three\'s principles for stakeholder engagement?',
    options: [
      'Engaging stakeholders only when needed',
      'Maintaining ongoing stakeholder relationships',
      'Focusing only on internal stakeholders',
      'Ignoring stakeholder feedback'
    ],
    correctAnswer: 'Maintaining ongoing stakeholder relationships',
    explanation: 'WASBoK Domain Three emphasizes the importance of maintaining ongoing relationships with all stakeholders to ensure effective accessibility advocacy and implementation.',
    wasBoKDomain: 'Domain Three: Advocating for Accessibility',
    wasBoKSection: 'Domain Three B: Stakeholder engagement',
    category: 'Stakeholder Management',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '133',
    question: 'According to WASBoK Domain Three, which practice best supports accessibility communication?',
    options: [
      'Using technical language only',
      'Implementing clear and effective communication strategies',
      'Focusing only on written communication',
      'Ignoring audience needs'
    ],
    correctAnswer: 'Implementing clear and effective communication strategies',
    explanation: 'WASBoK Domain Three emphasizes the importance of implementing clear and effective communication strategies that reach and resonate with all relevant audiences.',
    wasBoKDomain: 'Domain Three: Advocating for Accessibility',
    wasBoKSection: 'Domain Three C: Communication strategies',
    category: 'Communication',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '134',
    question: 'Which practice best aligns with WASBoK Domain Three\'s principles for accessibility leadership?',
    options: [
      'Leading by technical expertise only',
      'Demonstrating comprehensive accessibility leadership',
      'Focusing only on team leadership',
      'Ignoring organizational impact'
    ],
    correctAnswer: 'Demonstrating comprehensive accessibility leadership',
    explanation: 'WASBoK Domain Three emphasizes the importance of demonstrating comprehensive accessibility leadership that influences both team and organizational practices.',
    wasBoKDomain: 'Domain Three: Advocating for Accessibility',
    wasBoKSection: 'Domain Three D: Leadership',
    category: 'Leadership',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '135',
    question: 'According to WASBoK Domain Three, which approach best supports accessibility innovation?',
    options: [
      'Focusing only on technical innovation',
      'Implementing comprehensive innovation strategies',
      'Addressing innovation reactively',
      'Ignoring user needs'
    ],
    correctAnswer: 'Implementing comprehensive innovation strategies',
    explanation: 'WASBoK Domain Three emphasizes the importance of implementing comprehensive innovation strategies that address all aspects of accessibility and consider user needs.',
    wasBoKDomain: 'Domain Three: Advocating for Accessibility',
    wasBoKSection: 'Domain Three E: Innovation',
    category: 'Innovation',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '136',
    question: 'According to WASBoK Domain Four, which practice best supports accessibility research?',
    options: [
      'Conducting research without user involvement',
      'Implementing user-centered accessibility research',
      'Focusing only on technical research',
      'Ignoring research methodologies'
    ],
    correctAnswer: 'Implementing user-centered accessibility research',
    explanation: 'WASBoK Domain Four emphasizes the importance of implementing user-centered accessibility research that involves people with disabilities throughout the research process.',
    wasBoKDomain: 'Domain Four: Researching Accessibility',
    wasBoKSection: 'Domain Four A: Research methodologies',
    category: 'Research',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '137',
    question: 'Which approach best aligns with WASBoK Domain Four\'s principles for accessibility testing?',
    options: [
      'Testing with automated tools only',
      'Implementing comprehensive testing methodologies',
      'Focusing only on technical testing',
      'Ignoring user feedback'
    ],
    correctAnswer: 'Implementing comprehensive testing methodologies',
    explanation: 'WASBoK Domain Four emphasizes the importance of implementing comprehensive testing methodologies that combine automated, manual, and user testing approaches.',
    wasBoKDomain: 'Domain Four: Researching Accessibility',
    wasBoKSection: 'Domain Four B: Testing methodologies',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '138',
    question: 'According to WASBoK Domain Four, which practice best supports accessibility evaluation?',
    options: [
      'Evaluating based on technical criteria only',
      'Implementing comprehensive evaluation frameworks',
      'Focusing only on compliance evaluation',
      'Ignoring user experience'
    ],
    correctAnswer: 'Implementing comprehensive evaluation frameworks',
    explanation: 'WASBoK Domain Four emphasizes the importance of implementing comprehensive evaluation frameworks that consider both technical compliance and user experience.',
    wasBoKDomain: 'Domain Four: Researching Accessibility',
    wasBoKSection: 'Domain Four C: Evaluation frameworks',
    category: 'Evaluation',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '139',
    question: 'Which practice best aligns with WASBoK Domain Four\'s principles for accessibility analysis?',
    options: [
      'Analyzing based on assumptions',
      'Implementing data-driven analysis methods',
      'Focusing only on qualitative analysis',
      'Ignoring quantitative data'
    ],
    correctAnswer: 'Implementing data-driven analysis methods',
    explanation: 'WASBoK Domain Four emphasizes the importance of implementing data-driven analysis methods that combine both qualitative and quantitative data for comprehensive insights.',
    wasBoKDomain: 'Domain Four: Researching Accessibility',
    wasBoKSection: 'Domain Four D: Analysis methods',
    category: 'Analysis',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '140',
    question: 'According to WASBoK Domain Four, which approach best supports accessibility reporting?',
    options: [
      'Creating reports without stakeholder input',
      'Implementing comprehensive reporting frameworks',
      'Focusing only on technical reporting',
      'Ignoring audience needs'
    ],
    correctAnswer: 'Implementing comprehensive reporting frameworks',
    explanation: 'WASBoK Domain Four emphasizes the importance of implementing comprehensive reporting frameworks that address the needs of all stakeholders and provide actionable insights.',
    wasBoKDomain: 'Domain Four: Researching Accessibility',
    wasBoKSection: 'Domain Four E: Reporting frameworks',
    category: 'Reporting',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '141',
    question: 'Which practice best aligns with WASBoK Domain Five\'s principles for accessibility standards?',
    options: [
      'Following standards without understanding',
      'Implementing comprehensive standards knowledge',
      'Focusing only on technical standards',
      'Ignoring standard updates'
    ],
    correctAnswer: 'Implementing comprehensive standards knowledge',
    explanation: 'WASBoK Domain Five emphasizes the importance of implementing comprehensive knowledge of accessibility standards, including their purpose, scope, and practical application.',
    wasBoKDomain: 'Domain Five: Understanding Accessibility Standards',
    wasBoKSection: 'Domain Five A: Standards knowledge',
    category: 'Standards',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '142',
    question: 'According to WASBoK Domain Five, which approach best supports accessibility compliance?',
    options: [
      'Addressing compliance reactively',
      'Implementing proactive compliance strategies',
      'Focusing only on technical compliance',
      'Ignoring legal requirements'
    ],
    correctAnswer: 'Implementing proactive compliance strategies',
    explanation: 'WASBoK Domain Five emphasizes the importance of implementing proactive compliance strategies that ensure ongoing adherence to accessibility standards and requirements.',
    wasBoKDomain: 'Domain Five: Understanding Accessibility Standards',
    wasBoKSection: 'Domain Five B: Compliance strategies',
    category: 'Compliance',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '143',
    question: 'Which practice best aligns with WASBoK Domain Five\'s principles for accessibility implementation?',
    options: [
      'Implementing standards without context',
      'Applying standards with practical understanding',
      'Focusing only on technical implementation',
      'Ignoring user needs'
    ],
    correctAnswer: 'Applying standards with practical understanding',
    explanation: 'WASBoK Domain Five emphasizes the importance of applying accessibility standards with practical understanding of their real-world implementation and impact.',
    wasBoKDomain: 'Domain Five: Understanding Accessibility Standards',
    wasBoKSection: 'Domain Five C: Implementation principles',
    category: 'Implementation',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '144',
    question: 'According to WASBoK Domain Five, which approach best supports accessibility verification?',
    options: [
      'Verifying based on assumptions',
      'Implementing comprehensive verification methods',
      'Focusing only on technical verification',
      'Ignoring user experience'
    ],
    correctAnswer: 'Implementing comprehensive verification methods',
    explanation: 'WASBoK Domain Five emphasizes the importance of implementing comprehensive verification methods that ensure both technical compliance and practical usability.',
    wasBoKDomain: 'Domain Five: Understanding Accessibility Standards',
    wasBoKSection: 'Domain Five D: Verification methods',
    category: 'Verification',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '145',
    question: 'Which practice best aligns with WASBoK Domain Five\'s principles for accessibility documentation?',
    options: [
      'Creating documentation without context',
      'Implementing comprehensive documentation practices',
      'Focusing only on technical documentation',
      'Ignoring stakeholder needs'
    ],
    correctAnswer: 'Implementing comprehensive documentation practices',
    explanation: 'WASBoK Domain Five emphasizes the importance of implementing comprehensive documentation practices that address the needs of all stakeholders and provide clear guidance.',
    wasBoKDomain: 'Domain Five: Understanding Accessibility Standards',
    wasBoKSection: 'Domain Five E: Documentation practices',
    category: 'Documentation',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '146',
    question: 'According to WASBoK Domain Six, which practice best supports accessibility tools?',
    options: [
      'Using tools without understanding',
      'Implementing comprehensive tool knowledge',
      'Focusing only on technical tools',
      'Ignoring user needs'
    ],
    correctAnswer: 'Implementing comprehensive tool knowledge',
    explanation: 'WASBoK Domain Six emphasizes the importance of implementing comprehensive knowledge of accessibility tools, including their capabilities, limitations, and appropriate use.',
    wasBoKDomain: 'Domain Six: Understanding Accessibility Tools',
    wasBoKSection: 'Domain Six A: Tool knowledge',
    category: 'Tools',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '147',
    question: 'Which approach best aligns with WASBoK Domain Six\'s principles for tool selection?',
    options: [
      'Selecting tools without evaluation',
      'Implementing comprehensive tool evaluation',
      'Focusing only on technical capabilities',
      'Ignoring user requirements'
    ],
    correctAnswer: 'Implementing comprehensive tool evaluation',
    explanation: 'WASBoK Domain Six emphasizes the importance of implementing comprehensive evaluation of accessibility tools to ensure they meet project needs and user requirements.',
    wasBoKDomain: 'Domain Six: Understanding Accessibility Tools',
    wasBoKSection: 'Domain Six B: Tool selection',
    category: 'Tool Selection',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '148',
    question: 'According to WASBoK Domain Six, which practice best supports tool implementation?',
    options: [
      'Implementing tools without planning',
      'Implementing comprehensive tool strategies',
      'Focusing only on technical implementation',
      'Ignoring organizational needs'
    ],
    correctAnswer: 'Implementing comprehensive tool strategies',
    explanation: 'WASBoK Domain Six emphasizes the importance of implementing comprehensive strategies for accessibility tool implementation that consider organizational needs and resources.',
    wasBoKDomain: 'Domain Six: Understanding Accessibility Tools',
    wasBoKSection: 'Domain Six C: Implementation strategies',
    category: 'Implementation',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '149',
    question: 'Which practice best aligns with WASBoK Domain Six\'s principles for tool maintenance?',
    options: [
      'Maintaining tools without updates',
      'Implementing comprehensive maintenance practices',
      'Focusing only on technical maintenance',
      'Ignoring user feedback'
    ],
    correctAnswer: 'Implementing comprehensive maintenance practices',
    explanation: 'WASBoK Domain Six emphasizes the importance of implementing comprehensive maintenance practices for accessibility tools to ensure their continued effectiveness.',
    wasBoKDomain: 'Domain Six: Understanding Accessibility Tools',
    wasBoKSection: 'Domain Six D: Maintenance practices',
    category: 'Maintenance',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '150',
    question: 'According to WASBoK Domain Six, which approach best supports tool integration?',
    options: [
      'Integrating tools without planning',
      'Implementing comprehensive integration strategies',
      'Focusing only on technical integration',
      'Ignoring workflow impact'
    ],
    correctAnswer: 'Implementing comprehensive integration strategies',
    explanation: 'WASBoK Domain Six emphasizes the importance of implementing comprehensive strategies for integrating accessibility tools into existing workflows and processes.',
    wasBoKDomain: 'Domain Six: Understanding Accessibility Tools',
    wasBoKSection: 'Domain Six E: Integration strategies',
    category: 'Integration',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '151',
    question: 'According to WASBoK Domain Seven, which practice best supports accessibility evaluation?',
    options: [
      'Evaluating based on assumptions',
      'Implementing comprehensive evaluation methodologies',
      'Focusing only on technical evaluation',
      'Ignoring user experience'
    ],
    correctAnswer: 'Implementing comprehensive evaluation methodologies',
    explanation: 'WASBoK Domain Seven emphasizes the importance of implementing comprehensive evaluation methodologies that consider both technical compliance and user experience in accessibility assessment.',
    wasBoKDomain: 'Domain Seven: Evaluating Accessibility',
    wasBoKSection: 'Domain Seven A: Evaluation methodologies',
    category: 'Evaluation',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '152',
    question: 'Which approach best aligns with WASBoK Domain Seven\'s principles for accessibility testing?',
    options: [
      'Testing with automated tools only',
      'Implementing comprehensive testing strategies',
      'Focusing only on technical testing',
      'Ignoring user feedback'
    ],
    correctAnswer: 'Implementing comprehensive testing strategies',
    explanation: 'WASBoK Domain Seven emphasizes the importance of implementing comprehensive testing strategies that combine automated, manual, and user testing approaches for thorough accessibility assessment.',
    wasBoKDomain: 'Domain Seven: Evaluating Accessibility',
    wasBoKSection: 'Domain Seven B: Testing strategies',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '153',
    question: 'According to WASBoK Domain Seven, which practice best supports accessibility reporting?',
    options: [
      'Creating reports without stakeholder input',
      'Implementing comprehensive reporting methodologies',
      'Focusing only on technical reporting',
      'Ignoring audience needs'
    ],
    correctAnswer: 'Implementing comprehensive reporting methodologies',
    explanation: 'WASBoK Domain Seven emphasizes the importance of implementing comprehensive reporting methodologies that address the needs of all stakeholders and provide actionable insights.',
    wasBoKDomain: 'Domain Seven: Evaluating Accessibility',
    wasBoKSection: 'Domain Seven C: Reporting methodologies',
    category: 'Reporting',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '154',
    question: 'Which practice best aligns with WASBoK Domain Seven\'s principles for accessibility analysis?',
    options: [
      'Analyzing based on assumptions',
      'Implementing comprehensive analysis frameworks',
      'Focusing only on technical analysis',
      'Ignoring user experience'
    ],
    correctAnswer: 'Implementing comprehensive analysis frameworks',
    explanation: 'WASBoK Domain Seven emphasizes the importance of implementing comprehensive analysis frameworks that consider both technical compliance and user experience in accessibility assessment.',
    wasBoKDomain: 'Domain Seven: Evaluating Accessibility',
    wasBoKSection: 'Domain Seven D: Analysis frameworks',
    category: 'Analysis',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '155',
    question: 'According to WASBoK Domain Seven, which approach best supports accessibility recommendations?',
    options: [
      'Providing generic recommendations',
      'Implementing comprehensive recommendation strategies',
      'Focusing only on technical recommendations',
      'Ignoring stakeholder needs'
    ],
    correctAnswer: 'Implementing comprehensive recommendation strategies',
    explanation: 'WASBoK Domain Seven emphasizes the importance of implementing comprehensive recommendation strategies that address the specific needs of stakeholders and provide actionable solutions.',
    wasBoKDomain: 'Domain Seven: Evaluating Accessibility',
    wasBoKSection: 'Domain Seven E: Recommendation strategies',
    category: 'Recommendations',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '156',
    question: 'Which practice best aligns with WASBoK Domain Eight\'s principles for accessibility training?',
    options: [
      'Providing one-time training sessions',
      'Implementing comprehensive training programs',
      'Focusing only on technical training',
      'Ignoring learner needs'
    ],
    correctAnswer: 'Implementing comprehensive training programs',
    explanation: 'WASBoK Domain Eight emphasizes the importance of implementing comprehensive training programs that address the diverse needs of learners and cover all aspects of accessibility.',
    wasBoKDomain: 'Domain Eight: Training in Accessibility',
    wasBoKSection: 'Domain Eight A: Training programs',
    category: 'Training',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '157',
    question: 'According to WASBoK Domain Eight, which approach best supports accessibility education?',
    options: [
      'Educating without assessment',
      'Implementing comprehensive education strategies',
      'Focusing only on technical education',
      'Ignoring learning outcomes'
    ],
    correctAnswer: 'Implementing comprehensive education strategies',
    explanation: 'WASBoK Domain Eight emphasizes the importance of implementing comprehensive education strategies that ensure effective learning and measurable outcomes in accessibility education.',
    wasBoKDomain: 'Domain Eight: Training in Accessibility',
    wasBoKSection: 'Domain Eight B: Education strategies',
    category: 'Education',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '158',
    question: 'Which practice best aligns with WASBoK Domain Eight\'s principles for accessibility assessment?',
    options: [
      'Assessing without feedback',
      'Implementing comprehensive assessment methods',
      'Focusing only on technical assessment',
      'Ignoring learner progress'
    ],
    correctAnswer: 'Implementing comprehensive assessment methods',
    explanation: 'WASBoK Domain Eight emphasizes the importance of implementing comprehensive assessment methods that measure learning outcomes and provide valuable feedback for improvement.',
    wasBoKDomain: 'Domain Eight: Training in Accessibility',
    wasBoKSection: 'Domain Eight C: Assessment methods',
    category: 'Assessment',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '159',
    question: 'According to WASBoK Domain Eight, which approach best supports accessibility curriculum development?',
    options: [
      'Developing curriculum without input',
      'Implementing comprehensive curriculum design',
      'Focusing only on technical content',
      'Ignoring learning objectives'
    ],
    correctAnswer: 'Implementing comprehensive curriculum design',
    explanation: 'WASBoK Domain Eight emphasizes the importance of implementing comprehensive curriculum design that addresses learning objectives and meets the needs of diverse learners.',
    wasBoKDomain: 'Domain Eight: Training in Accessibility',
    wasBoKSection: 'Domain Eight D: Curriculum development',
    category: 'Curriculum',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '160',
    question: 'Which practice best aligns with WASBoK Domain Eight\'s principles for accessibility delivery?',
    options: [
      'Delivering without engagement',
      'Implementing comprehensive delivery methods',
      'Focusing only on technical delivery',
      'Ignoring learner engagement'
    ],
    correctAnswer: 'Implementing comprehensive delivery methods',
    explanation: 'WASBoK Domain Eight emphasizes the importance of implementing comprehensive delivery methods that engage learners and ensure effective knowledge transfer in accessibility training.',
    wasBoKDomain: 'Domain Eight: Training in Accessibility',
    wasBoKSection: 'Domain Eight E: Delivery methods',
    category: 'Delivery',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '161',
    question: 'According to WASBoK Domain Nine, which practice best supports accessibility research?',
    options: [
      'Researching without methodology',
      'Implementing comprehensive research approaches',
      'Focusing only on technical research',
      'Ignoring research ethics'
    ],
    correctAnswer: 'Implementing comprehensive research approaches',
    explanation: 'WASBoK Domain Nine emphasizes the importance of implementing comprehensive research approaches that follow ethical guidelines and produce meaningful accessibility insights.',
    wasBoKDomain: 'Domain Nine: Researching Accessibility',
    wasBoKSection: 'Domain Nine A: Research approaches',
    category: 'Research',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '162',
    question: 'Which approach best aligns with WASBoK Domain Nine\'s principles for accessibility methodology?',
    options: [
      'Using methodology without validation',
      'Implementing comprehensive research methodologies',
      'Focusing only on technical methodology',
      'Ignoring research validity'
    ],
    correctAnswer: 'Implementing comprehensive research methodologies',
    explanation: 'WASBoK Domain Nine emphasizes the importance of implementing comprehensive research methodologies that ensure validity and reliability in accessibility research.',
    wasBoKDomain: 'Domain Nine: Researching Accessibility',
    wasBoKSection: 'Domain Nine B: Research methodologies',
    category: 'Methodology',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '163',
    question: 'According to WASBoK Domain Nine, which practice best supports accessibility analysis?',
    options: [
      'Analyzing without rigor',
      'Implementing comprehensive analysis approaches',
      'Focusing only on technical analysis',
      'Ignoring research quality'
    ],
    correctAnswer: 'Implementing comprehensive analysis approaches',
    explanation: 'WASBoK Domain Nine emphasizes the importance of implementing comprehensive analysis approaches that ensure quality and rigor in accessibility research.',
    wasBoKDomain: 'Domain Nine: Researching Accessibility',
    wasBoKSection: 'Domain Nine C: Analysis approaches',
    category: 'Analysis',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '164',
    question: 'Which practice best aligns with WASBoK Domain Nine\'s principles for accessibility dissemination?',
    options: [
      'Disseminating without impact',
      'Implementing comprehensive dissemination strategies',
      'Focusing only on technical dissemination',
      'Ignoring audience needs'
    ],
    correctAnswer: 'Implementing comprehensive dissemination strategies',
    explanation: 'WASBoK Domain Nine emphasizes the importance of implementing comprehensive dissemination strategies that ensure research findings reach and impact relevant audiences.',
    wasBoKDomain: 'Domain Nine: Researching Accessibility',
    wasBoKSection: 'Domain Nine D: Dissemination strategies',
    category: 'Dissemination',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '165',
    question: 'According to WASBoK Domain Nine, which approach best supports accessibility collaboration?',
    options: [
      'Collaborating without coordination',
      'Implementing comprehensive collaboration frameworks',
      'Focusing only on technical collaboration',
      'Ignoring stakeholder needs'
    ],
    correctAnswer: 'Implementing comprehensive collaboration frameworks',
    explanation: 'WASBoK Domain Nine emphasizes the importance of implementing comprehensive collaboration frameworks that facilitate effective partnerships in accessibility research.',
    wasBoKDomain: 'Domain Nine: Researching Accessibility',
    wasBoKSection: 'Domain Nine E: Collaboration frameworks',
    category: 'Collaboration',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '166',
    question: 'According to WASBoK Domain Ten, which practice best supports accessibility innovation?',
    options: [
      'Innovating without research',
      'Implementing comprehensive innovation approaches',
      'Focusing only on technical innovation',
      'Ignoring user needs'
    ],
    correctAnswer: 'Implementing comprehensive innovation approaches',
    explanation: 'WASBoK Domain Ten emphasizes the importance of implementing comprehensive innovation approaches that consider user needs and leverage research insights for meaningful accessibility solutions.',
    wasBoKDomain: 'Domain Ten: Innovating Accessibility',
    wasBoKSection: 'Domain Ten A: Innovation approaches',
    category: 'Innovation',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '167',
    question: 'Which approach best aligns with WASBoK Domain Ten\'s principles for accessibility technology?',
    options: [
      'Using technology without evaluation',
      'Implementing comprehensive technology strategies',
      'Focusing only on technical capabilities',
      'Ignoring user requirements'
    ],
    correctAnswer: 'Implementing comprehensive technology strategies',
    explanation: 'WASBoK Domain Ten emphasizes the importance of implementing comprehensive technology strategies that address user needs and leverage emerging technologies for accessibility.',
    wasBoKDomain: 'Domain Ten: Innovating Accessibility',
    wasBoKSection: 'Domain Ten B: Technology strategies',
    category: 'Technology',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '168',
    question: 'According to WASBoK Domain Ten, which practice best supports accessibility design?',
    options: [
      'Designing without research',
      'Implementing comprehensive design approaches',
      'Focusing only on technical design',
      'Ignoring user experience'
    ],
    correctAnswer: 'Implementing comprehensive design approaches',
    explanation: 'WASBoK Domain Ten emphasizes the importance of implementing comprehensive design approaches that consider user needs and leverage research insights for accessible solutions.',
    wasBoKDomain: 'Domain Ten: Innovating Accessibility',
    wasBoKSection: 'Domain Ten C: Design approaches',
    category: 'Design',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '169',
    question: 'Which practice best aligns with WASBoK Domain Ten\'s principles for accessibility development?',
    options: [
      'Developing without planning',
      'Implementing comprehensive development strategies',
      'Focusing only on technical development',
      'Ignoring user feedback'
    ],
    correctAnswer: 'Implementing comprehensive development strategies',
    explanation: 'WASBoK Domain Ten emphasizes the importance of implementing comprehensive development strategies that incorporate user feedback and leverage innovative approaches for accessibility.',
    wasBoKDomain: 'Domain Ten: Innovating Accessibility',
    wasBoKSection: 'Domain Ten D: Development strategies',
    category: 'Development',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '170',
    question: 'According to WASBoK Domain Ten, which approach best supports accessibility implementation?',
    options: [
      'Implementing without evaluation',
      'Implementing comprehensive implementation strategies',
      'Focusing only on technical implementation',
      'Ignoring organizational needs'
    ],
    correctAnswer: 'Implementing comprehensive implementation strategies',
    explanation: 'WASBoK Domain Ten emphasizes the importance of implementing comprehensive strategies for accessibility implementation that consider organizational needs and leverage innovative approaches.',
    wasBoKDomain: 'Domain Ten: Innovating Accessibility',
    wasBoKSection: 'Domain Ten E: Implementation strategies',
    category: 'Implementation',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '171',
    question: 'Which practice best aligns with WASBoK Domain Eleven\'s principles for accessibility leadership?',
    options: [
      'Leading without vision',
      'Implementing comprehensive leadership approaches',
      'Focusing only on technical leadership',
      'Ignoring organizational impact'
    ],
    correctAnswer: 'Implementing comprehensive leadership approaches',
    explanation: 'WASBoK Domain Eleven emphasizes the importance of implementing comprehensive leadership approaches that drive organizational change and promote accessibility excellence.',
    wasBoKDomain: 'Domain Eleven: Leading Accessibility',
    wasBoKSection: 'Domain Eleven A: Leadership approaches',
    category: 'Leadership',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '172',
    question: 'According to WASBoK Domain Eleven, which approach best supports accessibility strategy?',
    options: [
      'Strategizing without planning',
      'Implementing comprehensive strategic approaches',
      'Focusing only on technical strategy',
      'Ignoring organizational goals'
    ],
    correctAnswer: 'Implementing comprehensive strategic approaches',
    explanation: 'WASBoK Domain Eleven emphasizes the importance of implementing comprehensive strategic approaches that align with organizational goals and drive accessibility excellence.',
    wasBoKDomain: 'Domain Eleven: Leading Accessibility',
    wasBoKSection: 'Domain Eleven B: Strategic approaches',
    category: 'Strategy',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '173',
    question: 'Which practice best aligns with WASBoK Domain Eleven\'s principles for accessibility management?',
    options: [
      'Managing without oversight',
      'Implementing comprehensive management approaches',
      'Focusing only on technical management',
      'Ignoring team needs'
    ],
    correctAnswer: 'Implementing comprehensive management approaches',
    explanation: 'WASBoK Domain Eleven emphasizes the importance of implementing comprehensive management approaches that support team needs and drive accessibility excellence.',
    wasBoKDomain: 'Domain Eleven: Leading Accessibility',
    wasBoKSection: 'Domain Eleven C: Management approaches',
    category: 'Management',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '174',
    question: 'According to WASBoK Domain Eleven, which approach best supports accessibility governance?',
    options: [
      'Governing without structure',
      'Implementing comprehensive governance frameworks',
      'Focusing only on technical governance',
      'Ignoring organizational needs'
    ],
    correctAnswer: 'Implementing comprehensive governance frameworks',
    explanation: 'WASBoK Domain Eleven emphasizes the importance of implementing comprehensive governance frameworks that ensure organizational accountability and drive accessibility excellence.',
    wasBoKDomain: 'Domain Eleven: Leading Accessibility',
    wasBoKSection: 'Domain Eleven D: Governance frameworks',
    category: 'Governance',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '175',
    question: 'Which practice best aligns with WASBoK Domain Eleven\'s principles for accessibility culture?',
    options: [
      'Building culture without engagement',
      'Implementing comprehensive cultural approaches',
      'Focusing only on technical culture',
      'Ignoring organizational values'
    ],
    correctAnswer: 'Implementing comprehensive cultural approaches',
    explanation: 'WASBoK Domain Eleven emphasizes the importance of implementing comprehensive cultural approaches that align with organizational values and promote accessibility excellence.',
    wasBoKDomain: 'Domain Eleven: Leading Accessibility',
    wasBoKSection: 'Domain Eleven E: Cultural approaches',
    category: 'Culture',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '176',
    question: 'According to WASBoK Domain Twelve, which practice best supports accessibility advocacy?',
    options: [
      'Advocating without impact',
      'Implementing comprehensive advocacy approaches',
      'Focusing only on technical advocacy',
      'Ignoring stakeholder needs'
    ],
    correctAnswer: 'Implementing comprehensive advocacy approaches',
    explanation: 'WASBoK Domain Twelve emphasizes the importance of implementing comprehensive advocacy approaches that address stakeholder needs and drive accessibility excellence.',
    wasBoKDomain: 'Domain Twelve: Advocating for Accessibility',
    wasBoKSection: 'Domain Twelve A: Advocacy approaches',
    category: 'Advocacy',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '177',
    question: 'Which approach best aligns with WASBoK Domain Twelve\'s principles for accessibility communication?',
    options: [
      'Communicating without strategy',
      'Implementing comprehensive communication approaches',
      'Focusing only on technical communication',
      'Ignoring audience needs'
    ],
    correctAnswer: 'Implementing comprehensive communication approaches',
    explanation: 'WASBoK Domain Twelve emphasizes the importance of implementing comprehensive communication approaches that reach and resonate with all relevant audiences.',
    wasBoKDomain: 'Domain Twelve: Advocating for Accessibility',
    wasBoKSection: 'Domain Twelve B: Communication approaches',
    category: 'Communication',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '178',
    question: 'According to WASBoK Domain Twelve, which practice best supports accessibility engagement?',
    options: [
      'Engaging without purpose',
      'Implementing comprehensive engagement strategies',
      'Focusing only on technical engagement',
      'Ignoring stakeholder needs'
    ],
    correctAnswer: 'Implementing comprehensive engagement strategies',
    explanation: 'WASBoK Domain Twelve emphasizes the importance of implementing comprehensive engagement strategies that build meaningful relationships with stakeholders.',
    wasBoKDomain: 'Domain Twelve: Advocating for Accessibility',
    wasBoKSection: 'Domain Twelve C: Engagement strategies',
    category: 'Engagement',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '179',
    question: 'Which practice best aligns with WASBoK Domain Twelve\'s principles for accessibility influence?',
    options: [
      'Influencing without impact',
      'Implementing comprehensive influence approaches',
      'Focusing only on technical influence',
      'Ignoring organizational needs'
    ],
    correctAnswer: 'Implementing comprehensive influence approaches',
    explanation: 'WASBoK Domain Twelve emphasizes the importance of implementing comprehensive influence approaches that drive organizational change and promote accessibility excellence.',
    wasBoKDomain: 'Domain Twelve: Advocating for Accessibility',
    wasBoKSection: 'Domain Twelve D: Influence approaches',
    category: 'Influence',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '180',
    question: 'According to WASBoK Domain Twelve, which approach best supports accessibility collaboration?',
    options: [
      'Collaborating without coordination',
      'Implementing comprehensive collaboration strategies',
      'Focusing only on technical collaboration',
      'Ignoring partner needs'
    ],
    correctAnswer: 'Implementing comprehensive collaboration strategies',
    explanation: 'WASBoK Domain Twelve emphasizes the importance of implementing comprehensive collaboration strategies that build effective partnerships and drive accessibility excellence.',
    wasBoKDomain: 'Domain Twelve: Advocating for Accessibility',
    wasBoKSection: 'Domain Twelve E: Collaboration strategies',
    category: 'Collaboration',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '181',
    question: 'According to WASBoK Domain Thirteen, which practice best supports accessibility policy?',
    options: [
      'Creating policies without research',
      'Implementing comprehensive policy approaches',
      'Focusing only on technical policies',
      'Ignoring stakeholder needs'
    ],
    correctAnswer: 'Implementing comprehensive policy approaches',
    explanation: 'WASBoK Domain Thirteen emphasizes the importance of implementing comprehensive policy approaches that address stakeholder needs and drive accessibility excellence.',
    wasBoKDomain: 'Domain Thirteen: Policy and Standards',
    wasBoKSection: 'Domain Thirteen A: Policy approaches',
    category: 'Policy',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '182',
    question: 'Which approach best aligns with WASBoK Domain Thirteen\'s principles for accessibility standards?',
    options: [
      'Following standards without understanding',
      'Implementing comprehensive standards approaches',
      'Focusing only on technical standards',
      'Ignoring standard updates'
    ],
    correctAnswer: 'Implementing comprehensive standards approaches',
    explanation: 'WASBoK Domain Thirteen emphasizes the importance of implementing comprehensive approaches to accessibility standards that ensure effective implementation and ongoing compliance.',
    wasBoKDomain: 'Domain Thirteen: Policy and Standards',
    wasBoKSection: 'Domain Thirteen B: Standards approaches',
    category: 'Standards',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '183',
    question: 'According to WASBoK Domain Thirteen, which practice best supports accessibility compliance?',
    options: [
      'Addressing compliance reactively',
      'Implementing comprehensive compliance strategies',
      'Focusing only on technical compliance',
      'Ignoring legal requirements'
    ],
    correctAnswer: 'Implementing comprehensive compliance strategies',
    explanation: 'WASBoK Domain Thirteen emphasizes the importance of implementing comprehensive compliance strategies that ensure ongoing adherence to accessibility standards and requirements.',
    wasBoKDomain: 'Domain Thirteen: Policy and Standards',
    wasBoKSection: 'Domain Thirteen C: Compliance strategies',
    category: 'Compliance',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '184',
    question: 'Which practice best aligns with WASBoK Domain Thirteen\'s principles for accessibility regulation?',
    options: [
      'Regulating without flexibility',
      'Implementing comprehensive regulatory approaches',
      'Focusing only on technical regulation',
      'Ignoring organizational needs'
    ],
    correctAnswer: 'Implementing comprehensive regulatory approaches',
    explanation: 'WASBoK Domain Thirteen emphasizes the importance of implementing comprehensive regulatory approaches that balance compliance requirements with organizational needs.',
    wasBoKDomain: 'Domain Thirteen: Policy and Standards',
    wasBoKSection: 'Domain Thirteen D: Regulatory approaches',
    category: 'Regulation',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '185',
    question: 'According to WASBoK Domain Thirteen, which approach best supports accessibility enforcement?',
    options: [
      'Enforcing without guidance',
      'Implementing comprehensive enforcement strategies',
      'Focusing only on technical enforcement',
      'Ignoring stakeholder needs'
    ],
    correctAnswer: 'Implementing comprehensive enforcement strategies',
    explanation: 'WASBoK Domain Thirteen emphasizes the importance of implementing comprehensive enforcement strategies that ensure effective implementation of accessibility requirements.',
    wasBoKDomain: 'Domain Thirteen: Policy and Standards',
    wasBoKSection: 'Domain Thirteen E: Enforcement strategies',
    category: 'Enforcement',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '186',
    question: 'Which practice best aligns with WASBoK Domain Fourteen\'s principles for accessibility research?',
    options: [
      'Researching without methodology',
      'Implementing comprehensive research approaches',
      'Focusing only on technical research',
      'Ignoring research ethics'
    ],
    correctAnswer: 'Implementing comprehensive research approaches',
    explanation: 'WASBoK Domain Fourteen emphasizes the importance of implementing comprehensive research approaches that follow ethical guidelines and produce meaningful accessibility insights.',
    wasBoKDomain: 'Domain Fourteen: Research and Development',
    wasBoKSection: 'Domain Fourteen A: Research approaches',
    category: 'Research',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '187',
    question: 'According to WASBoK Domain Fourteen, which approach best supports accessibility development?',
    options: [
      'Developing without planning',
      'Implementing comprehensive development strategies',
      'Focusing only on technical development',
      'Ignoring user needs'
    ],
    correctAnswer: 'Implementing comprehensive development strategies',
    explanation: 'WASBoK Domain Fourteen emphasizes the importance of implementing comprehensive development strategies that incorporate user needs and leverage research insights.',
    wasBoKDomain: 'Domain Fourteen: Research and Development',
    wasBoKSection: 'Domain Fourteen B: Development strategies',
    category: 'Development',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '188',
    question: 'Which practice best aligns with WASBoK Domain Fourteen\'s principles for accessibility innovation?',
    options: [
      'Innovating without research',
      'Implementing comprehensive innovation approaches',
      'Focusing only on technical innovation',
      'Ignoring user requirements'
    ],
    correctAnswer: 'Implementing comprehensive innovation approaches',
    explanation: 'WASBoK Domain Fourteen emphasizes the importance of implementing comprehensive innovation approaches that address user needs and leverage research insights.',
    wasBoKDomain: 'Domain Fourteen: Research and Development',
    wasBoKSection: 'Domain Fourteen C: Innovation approaches',
    category: 'Innovation',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '189',
    question: 'According to WASBoK Domain Fourteen, which approach best supports accessibility testing?',
    options: [
      'Testing without methodology',
      'Implementing comprehensive testing approaches',
      'Focusing only on technical testing',
      'Ignoring user feedback'
    ],
    correctAnswer: 'Implementing comprehensive testing approaches',
    explanation: 'WASBoK Domain Fourteen emphasizes the importance of implementing comprehensive testing approaches that combine automated, manual, and user testing methods.',
    wasBoKDomain: 'Domain Fourteen: Research and Development',
    wasBoKSection: 'Domain Fourteen D: Testing approaches',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '190',
    question: 'Which practice best aligns with WASBoK Domain Fourteen\'s principles for accessibility evaluation?',
    options: [
      'Evaluating without criteria',
      'Implementing comprehensive evaluation approaches',
      'Focusing only on technical evaluation',
      'Ignoring user experience'
    ],
    correctAnswer: 'Implementing comprehensive evaluation approaches',
    explanation: 'WASBoK Domain Fourteen emphasizes the importance of implementing comprehensive evaluation approaches that consider both technical compliance and user experience.',
    wasBoKDomain: 'Domain Fourteen: Research and Development',
    wasBoKSection: 'Domain Fourteen E: Evaluation approaches',
    category: 'Evaluation',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '191',
    question: 'According to WASBoK Domain Fifteen, which practice best supports accessibility education?',
    options: [
      'Educating without assessment',
      'Implementing comprehensive education approaches',
      'Focusing only on technical education',
      'Ignoring learning outcomes'
    ],
    correctAnswer: 'Implementing comprehensive education approaches',
    explanation: 'WASBoK Domain Fifteen emphasizes the importance of implementing comprehensive education approaches that ensure effective learning and measurable outcomes.',
    wasBoKDomain: 'Domain Fifteen: Education and Training',
    wasBoKSection: 'Domain Fifteen A: Education approaches',
    category: 'Education',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '192',
    question: 'Which approach best aligns with WASBoK Domain Fifteen\'s principles for accessibility training?',
    options: [
      'Training without planning',
      'Implementing comprehensive training approaches',
      'Focusing only on technical training',
      'Ignoring learner needs'
    ],
    correctAnswer: 'Implementing comprehensive training approaches',
    explanation: 'WASBoK Domain Fifteen emphasizes the importance of implementing comprehensive training approaches that address the diverse needs of learners.',
    wasBoKDomain: 'Domain Fifteen: Education and Training',
    wasBoKSection: 'Domain Fifteen B: Training approaches',
    category: 'Training',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '193',
    question: 'According to WASBoK Domain Fifteen, which practice best supports accessibility assessment?',
    options: [
      'Assessing without feedback',
      'Implementing comprehensive assessment approaches',
      'Focusing only on technical assessment',
      'Ignoring learner progress'
    ],
    correctAnswer: 'Implementing comprehensive assessment approaches',
    explanation: 'WASBoK Domain Fifteen emphasizes the importance of implementing comprehensive assessment approaches that measure learning outcomes and provide valuable feedback.',
    wasBoKDomain: 'Domain Fifteen: Education and Training',
    wasBoKSection: 'Domain Fifteen C: Assessment approaches',
    category: 'Assessment',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '194',
    question: 'Which practice best aligns with WASBoK Domain Fifteen\'s principles for accessibility curriculum?',
    options: [
      'Developing curriculum without input',
      'Implementing comprehensive curriculum approaches',
      'Focusing only on technical content',
      'Ignoring learning objectives'
    ],
    correctAnswer: 'Implementing comprehensive curriculum approaches',
    explanation: 'WASBoK Domain Fifteen emphasizes the importance of implementing comprehensive curriculum approaches that address learning objectives and meet diverse learner needs.',
    wasBoKDomain: 'Domain Fifteen: Education and Training',
    wasBoKSection: 'Domain Fifteen D: Curriculum approaches',
    category: 'Curriculum',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '195',
    question: 'According to WASBoK Domain Fifteen, which approach best supports accessibility delivery?',
    options: [
      'Delivering without engagement',
      'Implementing comprehensive delivery approaches',
      'Focusing only on technical delivery',
      'Ignoring learner engagement'
    ],
    correctAnswer: 'Implementing comprehensive delivery approaches',
    explanation: 'WASBoK Domain Fifteen emphasizes the importance of implementing comprehensive delivery approaches that engage learners and ensure effective knowledge transfer.',
    wasBoKDomain: 'Domain Fifteen: Education and Training',
    wasBoKSection: 'Domain Fifteen E: Delivery approaches',
    category: 'Delivery',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '196',
    question: 'Which practice best aligns with WASBoK Domain Sixteen\'s principles for accessibility management?',
    options: [
      'Managing without planning',
      'Implementing comprehensive management approaches',
      'Focusing only on technical management',
      'Ignoring organizational needs'
    ],
    correctAnswer: 'Implementing comprehensive management approaches',
    explanation: 'WASBoK Domain Sixteen emphasizes the importance of implementing comprehensive management approaches that support organizational needs and drive accessibility excellence.',
    wasBoKDomain: 'Domain Sixteen: Management and Leadership',
    wasBoKSection: 'Domain Sixteen A: Management approaches',
    category: 'Management',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '197',
    question: 'According to WASBoK Domain Sixteen, which approach best supports accessibility leadership?',
    options: [
      'Leading without vision',
      'Implementing comprehensive leadership approaches',
      'Focusing only on technical leadership',
      'Ignoring organizational impact'
    ],
    correctAnswer: 'Implementing comprehensive leadership approaches',
    explanation: 'WASBoK Domain Sixteen emphasizes the importance of implementing comprehensive leadership approaches that drive organizational change and promote accessibility excellence.',
    wasBoKDomain: 'Domain Sixteen: Management and Leadership',
    wasBoKSection: 'Domain Sixteen B: Leadership approaches',
    category: 'Leadership',
    difficulty: 'advanced',
    rating: 98
  },
  {
    id: '198',
    question: 'Which practice best aligns with WASBoK Domain Sixteen\'s principles for accessibility strategy?',
    options: [
      'Strategizing without planning',
      'Implementing comprehensive strategic approaches',
      'Focusing only on technical strategy',
      'Ignoring organizational goals'
    ],
    correctAnswer: 'Implementing comprehensive strategic approaches',
    explanation: 'WASBoK Domain Sixteen emphasizes the importance of implementing comprehensive strategic approaches that align with organizational goals and drive accessibility excellence.',
    wasBoKDomain: 'Domain Sixteen: Management and Leadership',
    wasBoKSection: 'Domain Sixteen C: Strategic approaches',
    category: 'Strategy',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '199',
    question: 'According to WASBoK Domain Sixteen, which approach best supports accessibility governance?',
    options: [
      'Governing without structure',
      'Implementing comprehensive governance approaches',
      'Focusing only on technical governance',
      'Ignoring organizational needs'
    ],
    correctAnswer: 'Implementing comprehensive governance approaches',
    explanation: 'WASBoK Domain Sixteen emphasizes the importance of implementing comprehensive governance approaches that ensure organizational accountability and drive accessibility excellence.',
    wasBoKDomain: 'Domain Sixteen: Management and Leadership',
    wasBoKSection: 'Domain Sixteen D: Governance approaches',
    category: 'Governance',
    difficulty: 'advanced',
    rating: 96
  },
  {
    id: '200',
    question: 'Which practice best aligns with WASBoK Domain Sixteen\'s principles for accessibility culture?',
    options: [
      'Building culture without engagement',
      'Implementing comprehensive cultural approaches',
      'Focusing only on technical culture',
      'Ignoring organizational values'
    ],
    correctAnswer: 'Implementing comprehensive cultural approaches',
    explanation: 'WASBoK Domain Sixteen emphasizes the importance of implementing comprehensive cultural approaches that align with organizational values and promote accessibility excellence.',
    wasBoKDomain: 'Domain Sixteen: Management and Leadership',
    wasBoKSection: 'Domain Sixteen E: Cultural approaches',
    category: 'Culture',
    difficulty: 'advanced',
    rating: 97
  },
  {
    id: '201',
    question: 'Which implementation best meets WCAG 2.2 Success Criterion 2.5.7 Dragging Movements?',
    options: [
      'A drag-and-drop interface with keyboard alternatives',
      'A drag-and-drop interface with touch alternatives',
      'A drag-and-drop interface with mouse alternatives',
      'A drag-and-drop interface with no alternatives'
    ],
    correctAnswer: 'A drag-and-drop interface with keyboard alternatives',
    explanation: 'WCAG 2.2 SC 2.5.7 requires that any functionality that can be operated by dragging must have an alternative input method. Keyboard alternatives are the most accessible option as they work for all users who cannot use a mouse or touch screen.',
    wcagCriterion: '2.5.7 Dragging Movements',
    wcagLevel: 'AA',
    category: 'Input Methods',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html',
    rating: 97
  },
  {
    id: '202',
    question: 'Which implementation of a carousel/slider meets WCAG 2.2 Success Criterion 2.5.6 Target Size (Enhanced)?',
    options: [
      'A carousel with 44x44 pixel navigation buttons',
      'A carousel with 32x32 pixel navigation buttons',
      'A carousel with 24x24 pixel navigation buttons',
      'A carousel with 20x20 pixel navigation buttons'
    ],
    correctAnswer: 'A carousel with 44x44 pixel navigation buttons',
    explanation: 'WCAG 2.2 SC 2.5.6 requires that targets be at least 44x44 CSS pixels unless an alternative method is provided. This ensures that interactive elements are large enough to be easily activated by users with motor impairments.',
    wcagCriterion: '2.5.6 Target Size (Enhanced)',
    wcagLevel: 'AAA',
    category: 'Input Methods',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html',
    rating: 98
  },
  {
    id: '203',
    question: 'Which form validation message implementation meets WCAG 2.2 Success Criterion 3.3.3 Error Suggestion?',
    options: [
      'A message that only states "Invalid input"',
      'A message that states "Invalid input" with a suggestion for correction',
      'A message that only shows a red border',
      'A message that only plays an error sound'
    ],
    correctAnswer: 'A message that states "Invalid input" with a suggestion for correction',
    explanation: 'WCAG 2.2 SC 3.3.3 requires that when an input error is detected, the error is identified and suggestions for correction are provided. This helps users understand what went wrong and how to fix it.',
    wcagCriterion: '3.3.3 Error Suggestion',
    wcagLevel: 'AA',
    category: 'Forms',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html',
    rating: 97
  },
  {
    id: '204',
    question: 'Which implementation of content that appears on hover or focus meets WCAG 2.2 Success Criterion 1.4.13?',
    options: [
      'Content that disappears when the pointer moves away',
      'Content that remains visible until dismissed',
      'Content that moves with the pointer',
      'Content that appears instantly'
    ],
    correctAnswer: 'Content that remains visible until dismissed',
    explanation: 'WCAG 2.2 SC 1.4.13 requires that content that appears on hover or focus can be dismissed without moving the pointer, remains visible until dismissed, and is hoverable. This ensures users can read and interact with the content.',
    wcagCriterion: '1.4.13 Content on Hover or Focus',
    wcagLevel: 'AA',
    category: 'Visual Design',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html',
    rating: 96
  },
  {
    id: '205',
    question: 'Which implementation of status messages meets WCAG 2.2 Success Criterion 4.1.3?',
    options: [
      'A message that only updates the DOM',
      'A message that uses aria-live="polite"',
      'A message that uses aria-live="assertive"',
      'A message that only uses visual indicators'
    ],
    correctAnswer: 'A message that uses aria-live="polite"',
    explanation: 'WCAG 2.2 SC 4.1.3 requires that status messages be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus. Using aria-live="polite" ensures the message is announced without interrupting the user.',
    wcagCriterion: '4.1.3 Status Messages',
    wcagLevel: 'AA',
    category: 'ARIA',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html',
    rating: 97
  },
  {
    id: '206',
    question: 'Which of the following is NOT a valid technique for making drag and drop functionality accessible?',
    options: [
      'Providing keyboard shortcuts for drag and drop actions',
      'Adding touch gestures with haptic feedback',
      'Relying solely on mousedown and mouseup events',
      'Implementing a button-based alternative interface'
    ],
    correctAnswer: 'Relying solely on mousedown and mouseup events',
    explanation: 'Relying solely on mousedown and mouseup events violates WCAG 2.2 SC 2.1.1 (Keyboard) and 2.5.7 (Dragging Movements). Drag and drop functionality must be operable through alternative means like keyboard controls or button interfaces. Mouse-only implementations exclude users who rely on keyboards, switches, or other input devices.',
    wcagCriterion: '2.5.7 Dragging Movements',
    wcagLevel: 'AA',
    category: 'Input Methods',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html',
    rating: 95
  },
  {
    id: '207',
    question: 'Which scenario violates WCAG 2.2 Success Criterion 2.4.11 Focus Not Obscured (Minimum)?',
    options: [
      'A sticky header that partially overlaps the focused element',
      'A modal dialog that traps focus within its boundaries',
      'A dropdown menu that expands below the focused trigger button',
      'A tooltip that appears adjacent to the focused element'
    ],
    correctAnswer: 'A sticky header that partially overlaps the focused element',
    explanation: 'A sticky header that obscures any part of the focused element violates SC 2.4.11. The criterion requires that when a user interface component receives keyboard focus, no part of the focused component is hidden by author-created content. This ensures keyboard users can always see which element they are interacting with.',
    wcagCriterion: '2.4.11 Focus Not Obscured (Minimum)',
    wcagLevel: 'AA',
    category: 'Focus Management',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html',
    rating: 96
  },
  {
    id: '208',
    question: 'Which implementation of an authentication process violates WCAG 2.2 Success Criterion 3.3.7 Redundant Entry?',
    options: [
      'Auto-filling previously entered information in a multi-step form',
      'Requiring re-entry of a password for security confirmation',
      'Asking for the same information twice without auto-fill',
      'Providing a "remember me" option for future sessions'
    ],
    correctAnswer: 'Asking for the same information twice without auto-fill',
    explanation: 'Requiring users to re-enter information that was previously provided in the same process without auto-filling or providing the option to copy violates SC 3.3.7. This is particularly burdensome for users with motor or cognitive disabilities. The exception is for security-sensitive information like passwords or when re-entry is essential.',
    wcagCriterion: '3.3.7 Redundant Entry',
    wcagLevel: 'A',
    category: 'Forms',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html',
    rating: 97
  },
  {
    id: '209',
    question: 'Which scenario correctly implements WCAG 2.2 Success Criterion 2.5.8 Target Size (Minimum) for inline links within a paragraph of text?',
    options: [
      'Making all inline links 44x44 pixels',
      'Providing a minimum 24-pixel spacing between links',
      'Relying on the default text size for target area',
      'The inline links are exempt from the target size requirement'
    ],
    correctAnswer: 'The inline links are exempt from the target size requirement',
    explanation: 'According to SC 2.5.8, inline links within a block of text are exempt from the minimum target size requirement. This exception recognizes that enlarging inline links would disrupt text flow and readability. However, adequate spacing between clickable elements is still important for usability.',
    wcagCriterion: '2.5.8 Target Size (Minimum)',
    wcagLevel: 'AA',
    category: 'Mobile Accessibility',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html',
    rating: 95
  },
  {
    id: '210',
    question: 'Which implementation of visible focus indication fails to meet WCAG 2.2 Success Criterion 2.4.12 Focus Not Obscured (Enhanced)?',
    options: [
      'Focus indicator partially hidden by a floating action button',
      'Focus indicator with minimum 2 pixel thickness',
      'Focus indicator using only background color change',
      'Focus indicator visible at 200% zoom'
    ],
    correctAnswer: 'Focus indicator partially hidden by a floating action button',
    explanation: 'SC 2.4.12 requires that no part of the focus indicator is hidden by author-created content. A floating action button that obscures any part of the focus indicator would violate this criterion. This ensures keyboard users can always see the entire focus indicator, which is crucial for understanding their current position on the page.',
    wcagCriterion: '2.4.12 Focus Not Obscured (Enhanced)',
    wcagLevel: 'AAA',
    category: 'Focus Management',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html',
    rating: 94
  },
  {
    id: '211',
    question: 'Which scenario violates WCAG 2.2 Success Criterion 3.2.6 Consistent Help?',
    options: [
      'Help link appears in different positions on mobile and desktop',
      'Help documentation requires authentication to access',
      'Contact form available through a chat widget',
      'Help link consistently located in the footer'
    ],
    correctAnswer: 'Help link appears in different positions on mobile and desktop',
    explanation: 'SC 3.2.6 requires that help mechanisms (like help links, contact information, or human assistance) appear in the same relative order and location across pages. Having the help link in different positions on mobile versus desktop violates this consistency requirement, making it harder for users to find assistance when needed.',
    wcagCriterion: '3.2.6 Consistent Help',
    wcagLevel: 'A',
    category: 'Navigation',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html',
    rating: 96
  },
  {
    id: '212',
    question: 'Which implementation of an accessible name calculation violates the ARIA specification and WCAG 2.2?',
    options: [
      'Using both aria-label and aria-labelledby on the same element',
      'Referencing multiple IDs in aria-labelledby',
      'Using aria-describedby for supplementary information',
      'Combining visible text with aria-describedby'
    ],
    correctAnswer: 'Using both aria-label and aria-labelledby on the same element',
    explanation: 'Using both aria-label and aria-labelledby on the same element is prohibited by the ARIA specification. When both are present, aria-labelledby takes precedence, but this creates confusion and potential maintenance issues. Choose either aria-label for custom text or aria-labelledby to reference visible text, but not both.',
    wcagCriterion: '4.1.2 Name, Role, Value',
    wcagLevel: 'A',
    category: 'ARIA',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html',
    rating: 97
  },
  {
    id: '213',
    question: 'Which scenario correctly implements WCAG 2.2 Success Criterion 2.4.13 Focus Appearance?',
    options: [
      'A 1px dotted outline with background color change',
      'A solid 2px contrasting border around the entire element',
      'A semi-transparent highlight with 2:1 contrast ratio',
      'An outline that matches the text color'
    ],
    correctAnswer: 'A solid 2px contrasting border around the entire element',
    explanation: 'SC 2.4.13 requires that the focus indicator have a minimum area of 1x1 CSS pixels, contrast ratio of at least 3:1 against adjacent colors, and cover at least 2 CSS pixels on the longest side of the element. A solid 2px contrasting border meets these requirements, ensuring the focus indicator is clearly visible.',
    wcagCriterion: '2.4.13 Focus Appearance',
    wcagLevel: 'AAA',
    category: 'Focus Management',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html',
    rating: 95
  },
  {
    id: '214',
    question: 'Which implementation of error prevention for authentication violates WCAG 2.2 Success Criterion 3.3.8?',
    options: [
      'Allowing users to review their entries before submission',
      'Providing a password strength meter during input',
      'Auto-logging out users after 20 minutes of inactivity',
      'Offering a mechanism to recover lost data'
    ],
    correctAnswer: 'Auto-logging out users after 20 minutes of inactivity',
    explanation: 'Auto-logging out users without warning or data preservation violates SC 3.3.8. For authentication processes where data loss could occur, users must be able to review, correct, or recover data. Sudden session expiration without these safeguards can cause significant frustration and data loss, particularly for users with cognitive disabilities.',
    wcagCriterion: '3.3.8 Accessible Authentication (Minimum)',
    wcagLevel: 'AA',
    category: 'Forms',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html',
    rating: 96
  },
  {
    id: '215',
    question: 'Which scenario violates WCAG 2.2 Success Criterion 2.5.7 Dragging Movements for touch interfaces?',
    options: [
      'Providing a slider with both drag and button controls',
      'Implementing pinch-to-zoom with keyboard zoom options',
      'Requiring drag gestures for essential functionality',
      'Supporting both drag-and-drop and cut-paste operations'
    ],
    correctAnswer: 'Requiring drag gestures for essential functionality',
    explanation: 'SC 2.5.7 requires that all functionality that uses dragging movements can be achieved through single-point activation (like tapping or clicking). Requiring drag gestures for essential functionality without alternatives violates this criterion, as it excludes users who have difficulty performing precise movements.',
    wcagCriterion: '2.5.7 Dragging Movements',
    wcagLevel: 'AA',
    category: 'Input Methods',
    difficulty: 'advanced',
    wcagLink: 'https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html',
    rating: 97
  },
  {
    id: '216',
    question: 'Which federal agencies are responsible for Section 508 implementation?',
    options: [
      'Only the Department of Justice',
      'Only the U.S. Access Board',
      'GSA, U.S. Access Board, and Department of Justice',
      'Only the General Services Administration'
    ],
    correctAnswer: 'GSA, U.S. Access Board, and Department of Justice',
    explanation: 'Section 508 implementation is managed by three main entities: the General Services Administration (GSA), U.S. Access Board, and Department of Justice, each with specific responsibilities in the process.',
    category: 'Policy',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/policies/united-states/',
    wasBoKSection: 'Section 508 of the US Rehabilitation Act of 1973, as amended'
  },
  {
    id: '217',
    question: 'Which WCAG version is referenced in the updated Section 508 standards?',
    options: [
      'WCAG 2.0',
      'WCAG 2.1',
      'WCAG 2.2',
      'WCAG 3.0'
    ],
    correctAnswer: 'WCAG 2.1',
    explanation: 'The updated Section 508 standards reference WCAG 2.1, which is the most recent version of the Web Content Accessibility Guidelines at the time of the update.',
    category: 'Policy',
    difficulty: 'intermediate',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/policies/united-states/',
    wasBoKSection: 'Section 508 of the US Rehabilitation Act of 1973, as amended'
  },
  {
    id: '218',
    question: 'What is the scope of the European Accessibility Act enacted in 2019?',
    options: [
      'Only public sector organizations',
      'Only private sector organizations',
      'Both public and private sectors',
      'Only educational institutions'
    ],
    correctAnswer: 'Both public and private sectors',
    explanation: 'The European Accessibility Act, enacted on June 27, 2019, applies to both public and private sectors, making it more comprehensive in scope than the Web and Mobile Accessibility Directive.',
    category: 'Policy',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/policies/european-union/',
    wasBoKSection: 'European Accessibility Act'
  },
  {
    id: '219',
    question: 'Under The Accessible Canada Act, which WCAG version and level is required for compliance?',
    options: [
      'WCAG 2.0 Level A',
      'WCAG 2.0 Level AA',
      'WCAG 2.1 Level AA',
      'WCAG 2.2 Level AA'
    ],
    correctAnswer: 'WCAG 2.0 Level AA',
    explanation: 'The Accessible Canada Act, which applies to government and all federally regulated agencies, requires compliance with WCAG 2.0 Level AA standards as specified in the Directive on Service and Digital.',
    category: 'Policy',
    difficulty: 'intermediate',
    rating: 93,
    wasBoKDomain: 'https://www.w3.org/WAI/policies/canada/',
    wasBoKSection: 'The Accessible Canada Act'
  },
  {
    id: '220',
    question: 'Which entities are responsible for implementing The Accessible Canada Act?',
    options: [
      'Only Employment and Social Development Canada',
      'Only Accessible Standards Canada',
      'Both Employment and Social Development Canada and Accessible Standards Canada',
      'The Canadian Human Rights Commission'
    ],
    correctAnswer: 'Both Employment and Social Development Canada and Accessible Standards Canada',
    explanation: 'The Accessible Canada Act is implemented by two main entities: Employment and Social Development Canada and Accessible Standards Canada, working together to ensure accessibility standards are developed and maintained.',
    category: 'Policy',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/policies/canada/',
    wasBoKSection: 'The Accessible Canada Act'
  },
  {
    id: '221',
    question: 'What is the scope of the UK Equality Act 2010 regarding web accessibility?',
    options: [
      'Public sector only',
      'Private sector only',
      'Both public and private sectors',
      'Government websites only'
    ],
    correctAnswer: 'Both public and private sectors',
    explanation: 'The UK Equality Act 2010 applies to both public and private sectors. It is a non-discrimination law that covers web accessibility as part of its broader scope to prevent discrimination against people with disabilities.',
    category: 'Policy',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/policies/united-kingdom/',
    wasBoKSection: 'Equality Act 2010'
  },
  {
    id: '222',
    question: 'What is the purpose of BS 8878 in relation to the UK Equality Act 2010?',
    options: [
      'It provides technical requirements for web accessibility',
      'It provides a framework for designing or procuring accessible web products',
      'It enforces WCAG compliance',
      'It establishes penalties for non-compliance'
    ],
    correctAnswer: 'It provides a framework for designing or procuring accessible web products',
    explanation: 'BS 8878 is a British standard that provides a framework for designing or procuring accessible web products. While it supports compliance with the Equality Act 2010, it does not contain technical requirements itself.',
    category: 'Policy',
    difficulty: 'advanced',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/policies/united-kingdom/',
    wasBoKSection: 'BS 8878 Web Accessibility'
  },
  {
    id: '223',
    question: 'Which EU body is responsible for monitoring compliance with the Web Accessibility Directive?',
    options: [
      'The European Commission directly',
      'Individual Member States through designated bodies',
      'The European Parliament',
      'The European Court of Justice'
    ],
    correctAnswer: 'Individual Member States through designated bodies',
    explanation: 'Under the EU Web Accessibility Directive, each Member State designates its own monitoring body responsible for verifying compliance with the directive\'s requirements. This is established in Commission Implementing Decision (EU) 2018/1524.',
    category: 'Policy',
    difficulty: 'advanced',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/policies/european-union/',
    wasBoKSection: 'Web and Mobile Accessibility Directive'
  },
  {
    id: '224',
    question: 'What type of law is The Accessible Canada Act classified as?',
    options: [
      'Only a non-discrimination law',
      'Only a procurement law',
      'Both a non-discrimination law and a procurement law',
      'Only a technical standards law'
    ],
    correctAnswer: 'Both a non-discrimination law and a procurement law',
    explanation: 'The Accessible Canada Act is classified as both a non-discrimination law and a procurement law, reflecting its comprehensive approach to ensuring accessibility in federal jurisdiction.',
    category: 'Policy',
    difficulty: 'intermediate',
    rating: 93,
    wasBoKDomain: 'https://www.w3.org/WAI/policies/canada/',
    wasBoKSection: 'The Accessible Canada Act'
  },
  {
    id: '225',
    question: 'Which document is required by the EU Web Accessibility Directive for public sector websites?',
    options: [
      'Privacy policy',
      'Terms of service',
      'Accessibility statement',
      'Cookie policy'
    ],
    correctAnswer: 'Accessibility statement',
    explanation: 'The EU Web Accessibility Directive requires public sector bodies to provide and regularly update a detailed accessibility statement for their websites and mobile applications, as established in Commission Implementing Decision (EU) 2018/1523.',
    category: 'Policy',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/policies/european-union/',
    wasBoKSection: 'Web and Mobile Accessibility Directive'
  },
  {
    id: '226',
    question: 'Which organization is responsible for enforcing the UK Equality Act 2010?',
    options: [
      'British Standards Institution',
      'Equality and Human Rights Commission',
      'Department for Digital, Culture, Media & Sport',
      'Government Digital Service'
    ],
    correctAnswer: 'Equality and Human Rights Commission',
    explanation: 'The Equality and Human Rights Commission is the responsible entity for enforcing the UK Equality Act 2010, which includes ensuring compliance with web accessibility requirements as part of preventing discrimination.',
    category: 'Policy',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/policies/united-kingdom/',
    wasBoKSection: 'Equality Act 2010'
  },
  {
    id: '227',
    question: 'What is the primary focus of Section 508 of the Rehabilitation Act?',
    options: [
      'Ensuring accessibility in federal procurement',
      'Promoting universal design principles',
      'Establishing minimum requirements for web accessibility',
      'Providing guidance on implementing WCAG 2.0'
    ],
    correctAnswer: 'Ensuring accessibility in federal procurement',
    explanation: 'Section 508 of the Rehabilitation Act focuses on ensuring that federal procurement processes include accessibility requirements. This ensures that products and services procured by federal agencies are accessible to people with disabilities.',
    category: 'Policy',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/policies/united-states/',
    wasBoKSection: 'Section 508 of the US Rehabilitation Act of 1973, as amended'
  },
  {
    id: '228',
    question: 'What is the scope of the Americans with Disabilities Act (ADA) regarding web accessibility?',
    options: [
      'Only federal government websites',
      'All government and private sector websites',
      'Federal agencies and their ICT procurement',
      'Only state government websites'
    ],
    correctAnswer: 'All government and private sector websites',
    explanation: 'The Americans with Disabilities Act (ADA) applies to all government and private sector websites. It requires that these websites be accessible to people with disabilities, which includes using WCAG 2.0 Level AA as a minimum standard.',
    category: 'Policy',
    difficulty: 'intermediate',
    rating: 97,
    wasBoKDomain: 'https://www.w3.org/WAI/policies/united-states/',
    wasBoKSection: 'Americans with Disabilities Act of 1990 (ADA), as amended'
  },
  {
    id: '229',
    question: 'Which federal agency is primarily responsible for enforcing the ADA?',
    options: [
      'Department of Justice',
      'Department of Transportation',
      'Department of Labor',
      'Equal Employment Opportunity Commission'
    ],
    correctAnswer: 'Department of Justice',
    explanation: 'The Department of Justice is primarily responsible for enforcing the Americans with Disabilities Act (ADA). They work with other federal agencies to ensure compliance with the law.',
    category: 'Policy',
    difficulty: 'intermediate',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/policies/united-states/',
    wasBoKSection: 'Americans with Disabilities Act of 1990 (ADA), as amended'
  },
  {
    id: '230',
    question: 'What is required under the Air Carrier Access Act regarding web accessibility?',
    options: [
      'WCAG 2.0 Level AA',
      'WCAG 2.1 Level AA',
      'WCAG 2.2 Level AA',
      'WCAG 3.0'
    ],
    correctAnswer: 'WCAG 2.0 Level AA',
    explanation: 'The Air Carrier Access Act requires airline websites to conform to WCAG 2.0 Level AA standards, as specified in the Department of Transportation\'s final rule published in 2013.',
    category: 'Policy',
    difficulty: 'intermediate',
    rating: 93,
    wasBoKDomain: 'https://www.w3.org/WAI/policies/united-states/',
    wasBoKSection: 'Air Carrier Access Act of 1986'
  },
  {
    id: '231',
    question: 'What is the role of the U.S. Access Board in Section 508?',
    options: [
      'Providing guidance on implementing WCAG 2.0',
      'Establishing minimum requirements for web accessibility',
      'Ensuring compliance with Section 508',
      'Promoting universal design principles'
    ],
    correctAnswer: 'Ensuring compliance with Section 508',
    explanation: 'The U.S. Access Board plays a key role in Section 508 by ensuring that federal agencies comply with the law. They provide guidance on implementing WCAG 2.0, establish minimum requirements for web accessibility, and promote universal design principles.',
    category: 'Policy',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/policies/united-states/',
    wasBoKSection: 'Section 508 of the US Rehabilitation Act of 1973, as amended'
  },
  {
    id: '232',
    question: 'Which W3C standard defines the accessibility requirements for authoring tools?',
    options: [
      'WCAG 2.2',
      'ATAG 2.0',
      'WAI-ARIA 1.2',
      'UAAG 2.0'
    ],
    correctAnswer: 'ATAG 2.0',
    explanation: 'The Authoring Tool Accessibility Guidelines (ATAG) 2.0 defines how authoring tools should help developers produce accessible web content and how to make the authoring tools themselves accessible.',
    category: 'Standards',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/',
    wasBoKSection: 'W3C Accessibility Standards Overview'
  },
  {
    id: '233',
    question: 'What is the primary purpose of WAI-ARIA according to W3C standards?',
    options: [
      'To replace HTML semantic elements',
      'To provide additional semantics for custom interactive components',
      'To create new HTML elements',
      'To validate web accessibility'
    ],
    correctAnswer: 'To provide additional semantics for custom interactive components',
    explanation: 'WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications) provides additional semantics to describe the nature of custom widgets, structures, and behaviors to assistive technologies when native HTML semantics are insufficient.',
    category: 'Standards',
    difficulty: 'intermediate',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/',
    wasBoKSection: 'WAI-ARIA Overview'
  },
  {
    id: '234',
    question: 'Which statement accurately describes the relationship between WCAG 2.2 and EN 301 549 in the context of international accessibility standards?',
    options: [
      'They are competing standards with different requirements',
      'EN 301 549 incorporates WCAG 2.2 requirements by reference and extends them for ICT',
      'WCAG 2.2 replaces EN 301 549 in European legislation',
      'They cover mutually exclusive aspects of digital accessibility'
    ],
    correctAnswer: 'EN 301 549 incorporates WCAG 2.2 requirements by reference and extends them for ICT',
    explanation: 'EN 301 549, the European accessibility standard, incorporates WCAG requirements by reference and extends them with additional ICT-specific requirements. This harmonization ensures consistency between international web accessibility requirements and European ICT accessibility standards while providing comprehensive coverage for all digital technologies.',
    category: 'Standards',
    difficulty: 'advanced',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/',
    wasBoKSection: 'Standards Harmonization'
  },
  {
    id: '235',
    question: 'What distinguishes WAI-ARIA attributes from standard HTML attributes in accessibility implementation?',
    options: [
      'WAI-ARIA attributes modify the visual appearance',
      'WAI-ARIA attributes only affect assistive technologies',
      'WAI-ARIA attributes replace HTML attributes',
      'WAI-ARIA attributes require JavaScript to function'
    ],
    correctAnswer: 'WAI-ARIA attributes only affect assistive technologies',
    explanation: 'WAI-ARIA attributes provide information exclusively to assistive technologies without affecting the visual appearance or behavior of elements. They supplement native HTML semantics to convey additional information about roles, states, and properties.',
    category: 'Standards',
    difficulty: 'advanced',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/',
    wasBoKSection: 'WAI-ARIA Overview'
  },
  {
    id: '236',
    question: 'Which guideline set addresses the accessibility of user agents like browsers and media players?',
    options: [
      'WCAG 2.2',
      'ATAG 2.0',
      'UAAG 2.0',
      'WAI-ARIA 1.2'
    ],
    correctAnswer: 'UAAG 2.0',
    explanation: 'The User Agent Accessibility Guidelines (UAAG) 2.0 provides guidelines for making user agents (browsers, media players, and assistive technologies) accessible to people with disabilities and interoperable with assistive technologies.',
    category: 'Standards',
    difficulty: 'intermediate',
    rating: 93,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/',
    wasBoKSection: 'W3C Accessibility Standards Overview'
  },
  {
    id: '237',
    question: 'What is the key difference between normative and informative content in W3C accessibility standards?',
    options: [
      'Normative content is required for conformance while informative content provides guidance',
      'Normative content is newer than informative content',
      'Informative content is required while normative content is optional',
      'There is no difference between them'
    ],
    correctAnswer: 'Normative content is required for conformance while informative content provides guidance',
    explanation: 'In W3C standards, normative content specifies what is required for conformance, while informative content provides helpful information, examples, and guidance but is not required for conformance.',
    category: 'Standards',
    difficulty: 'advanced',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/',
    wasBoKSection: 'W3C Standards and Notes'
  },
  {
    id: '238',
    question: 'Which statement best describes the relationship between WCAG and WAI-ARIA?',
    options: [
      'WCAG replaces WAI-ARIA',
      'WAI-ARIA helps meet WCAG success criteria',
      'They are competing standards',
      'They apply to different technologies'
    ],
    correctAnswer: 'WAI-ARIA helps meet WCAG success criteria',
    explanation: 'WAI-ARIA is a technical specification that helps developers meet WCAG success criteria, particularly for dynamic and interactive content. It provides a way to add accessibility information that HTML cannot express natively.',
    category: 'Standards',
    difficulty: 'intermediate',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/',
    wasBoKSection: 'Standards Integration'
  },
  {
    id: '239',
    question: 'What is the primary focus of XAG (XML Accessibility Guidelines)?',
    options: [
      'Making XML applications accessible',
      'Replacing HTML with XML',
      'Creating new XML standards',
      'Testing XML validity'
    ],
    correctAnswer: 'Making XML applications accessible',
    explanation: 'The XML Accessibility Guidelines (XAG) focus on making XML applications and documents accessible to people with disabilities. They provide guidance on how to create XML languages that support accessibility and how to use XML markup for accessibility.',
    category: 'Standards',
    difficulty: 'advanced',
    rating: 92,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/',
    wasBoKSection: 'Additional W3C Standards'
  },
  {
    id: '240',
    question: 'How do WCAG Techniques documents relate to WCAG success criteria?',
    options: [
      'They replace success criteria',
      'They provide examples and methods for meeting success criteria',
      'They are competing standards',
      'They only apply to specific technologies'
    ],
    correctAnswer: 'They provide examples and methods for meeting success criteria',
    explanation: 'WCAG Techniques documents provide specific, documented ways to meet WCAG success criteria. They include code examples, testing procedures, and common approaches but are informative rather than normative.',
    category: 'Standards',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/',
    wasBoKSection: 'WCAG Technical Documents'
  },
  {
    id: '241',
    question: 'Which W3C working group is responsible for developing accessibility standards?',
    options: [
      'HTML Working Group',
      'Accessibility Guidelines Working Group (AG WG)',
      'CSS Working Group',
      'JavaScript Working Group'
    ],
    correctAnswer: 'Accessibility Guidelines Working Group (AG WG)',
    explanation: 'The Accessibility Guidelines Working Group (AG WG) is responsible for developing guidelines and techniques for making web content accessible to people with disabilities, including WCAG standards.',
    category: 'Standards',
    difficulty: 'intermediate',
    rating: 93,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/',
    wasBoKSection: 'W3C Process and Groups'
  },
  {
    id: '242',
    question: 'What is the primary purpose of the WCAG-EM evaluation methodology?',
    options: [
      'To replace automated testing tools',
      'To provide a structured approach for evaluating web accessibility conformance',
      'To generate accessibility reports automatically',
      'To fix accessibility issues'
    ],
    correctAnswer: 'To provide a structured approach for evaluating web accessibility conformance',
    explanation: 'The Website Accessibility Conformance Evaluation Methodology (WCAG-EM) provides evaluators with a structured approach to determine how well websites conform to WCAG, ensuring consistent and thorough evaluations.',
    category: 'Testing',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/test-evaluate/',
    wasBoKSection: 'WCAG-EM Overview'
  },
  {
    id: '243',
    question: 'What is the most effective first step in conducting a preliminary accessibility evaluation according to WCAG-EM methodology?',
    options: [
      'Run automated tools on the entire website without manual verification',
      'Perform basic manual checks on representative key pages to identify patterns',
      'Conduct comprehensive user testing with assistive technologies',
      'Generate a detailed technical compliance report'
    ],
    correctAnswer: 'Perform basic manual checks on representative key pages to identify patterns',
    explanation: 'According to WCAG-EM methodology, starting with basic manual checks on representative pages is most effective as it helps identify common patterns and critical issues quickly. This approach provides immediate insights into major accessibility barriers and helps inform the scope and direction of more comprehensive testing.',
    category: 'Testing',
    difficulty: 'beginner',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/test-evaluate/',
    wasBoKSection: 'Easy Checks'
  },
  {
    id: '244',
    question: 'What is the recommended approach for selecting a representative sample of web pages for accessibility evaluation?',
    options: [
      'Test only the homepage',
      'Test every page on the website',
      'Select pages that represent different layouts, functionality, and types of content',
      'Test only pages with known issues'
    ],
    correctAnswer: 'Select pages that represent different layouts, functionality, and types of content',
    explanation: 'When evaluating web accessibility, it is important to select a representative sample that includes pages with different layouts, functionality, and content types to ensure comprehensive coverage of potential accessibility issues.',
    category: 'Testing',
    difficulty: 'intermediate',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/test-evaluate/',
    wasBoKSection: 'WCAG-EM Sample Selection'
  },
  {
    id: '245',
    question: 'What is the primary limitation of automated accessibility testing tools?',
    options: [
      'They are too expensive',
      'They can only identify about 25-30% of potential accessibility issues',
      'They are difficult to use',
      'They only work on simple websites'
    ],
    correctAnswer: 'They can only identify about 25-30% of potential accessibility issues',
    explanation: 'Automated testing tools can only identify about 25-30% of potential accessibility issues. Many accessibility requirements require human judgment to evaluate properly, such as the appropriateness of alternative text or the logical reading order.',
    category: 'Testing',
    difficulty: 'intermediate',
    rating: 97,
    wasBoKDomain: 'https://www.w3.org/WAI/test-evaluate/',
    wasBoKSection: 'Tools Overview'
  },
  {
    id: '246',
    question: 'Which aspect of accessibility testing requires manual verification even when using automated tools?',
    options: [
      'Color contrast ratios',
      'Alternative text quality and appropriateness',
      'HTML validation',
      'Missing form labels'
    ],
    correctAnswer: 'Alternative text quality and appropriateness',
    explanation: 'While automated tools can detect the presence or absence of alternative text, they cannot evaluate its quality or appropriateness. This requires human judgment to ensure the alt text accurately describes the image and its context.',
    category: 'Testing',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/test-evaluate/',
    wasBoKSection: 'Combined Expertise'
  },
  {
    id: '247',
    question: 'What is the essential first step in conducting a thorough keyboard accessibility evaluation?',
    options: [
      'Use a screen reader to verify content accessibility',
      'Press the Tab key to verify navigation order and focus visibility',
      'Check for ARIA attributes and roles in the code',
      'Validate HTML structure and semantics'
    ],
    correctAnswer: 'Press the Tab key to verify navigation order and focus visibility',
    explanation: 'The critical first step in keyboard accessibility testing is using the Tab key to verify that all interactive elements are reachable in a logical sequence and that the current focus is clearly visible. This foundational check ensures basic keyboard operability before proceeding to more complex interactions and helps identify major navigation barriers.',
    category: 'Testing',
    difficulty: 'beginner',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/test-evaluate/',
    wasBoKSection: 'Keyboard Testing'
  },
  {
    id: '248',
    question: 'What are the essential components that must be included in an accessibility evaluation report according to WCAG-EM methodology?',
    options: [
      'Only failed success criteria and screenshots',
      'Automated tool results and code snippets',
      'Scope, conformance level, results, evaluation process, and impact analysis',
      'List of errors and recommended fixes'
    ],
    correctAnswer: 'Scope, conformance level, results, evaluation process, and impact analysis',
    explanation: 'According to WCAG-EM, a comprehensive accessibility evaluation report must include the evaluation scope, target conformance level, detailed results with impact analysis, and a thorough description of the evaluation process used. This ensures stakeholders understand not only what was tested and found but also the implications of the results and the methodology used.',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/test-evaluate/',
    wasBoKSection: 'WCAG-EM Report'
  },
  {
    id: '249',
    question: 'What is the purpose of conducting accessibility testing with different browsers?',
    options: [
      'To increase website traffic',
      'To verify visual design consistency',
      'To ensure accessibility features work across different user agents',
      'To test website speed'
    ],
    correctAnswer: 'To ensure accessibility features work across different user agents',
    explanation: 'Testing with different browsers helps verify that accessibility features, such as ARIA attributes and keyboard navigation, work consistently across different user agents and assistive technologies.',
    category: 'Testing',
    difficulty: 'intermediate',
    rating: 92,
    wasBoKDomain: 'https://www.w3.org/WAI/test-evaluate/',
    wasBoKSection: 'Browser Testing'
  },
  {
    id: '250',
    question: 'When should accessibility testing ideally begin in the development process?',
    options: [
      'After the website launches',
      'During the planning and design phase',
      'When users report issues',
      'During the final quality assurance phase'
    ],
    correctAnswer: 'During the planning and design phase',
    explanation: 'Accessibility testing should begin during the planning and design phase to identify and address potential issues early, reducing the cost and effort required to fix problems later in development.',
    category: 'Testing',
    difficulty: 'intermediate',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/test-evaluate/',
    wasBoKSection: 'Early Testing'
  },
  {
    id: '251',
    question: 'What is the recommended approach for testing dynamic content updates?',
    options: [
      'Only test the initial page load',
      'Test with JavaScript disabled',
      'Use both automated tools and manual testing with assistive technologies',
      'Wait for user feedback'
    ],
    correctAnswer: 'Use both automated tools and manual testing with assistive technologies',
    explanation: 'Testing dynamic content requires a combination of automated tools and manual testing with assistive technologies to ensure that updates are properly announced and that the content remains accessible after changes.',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/test-evaluate/',
    wasBoKSection: 'Dynamic Content Testing'
  },
  {
    id: '252',
    question: 'Which practice helps avoid the failure of Success Criterion 1.3.2 (F1) regarding positioning information with CSS?',
    options: [
      'Using CSS positioning to convey meaning',
      'Using semantic HTML structure and proper markup',
      'Relying on visual layout only',
      'Removing all CSS positioning'
    ],
    correctAnswer: 'Using semantic HTML structure and proper markup',
    explanation: 'To avoid F1 failure, content should use proper semantic HTML structure rather than relying on CSS positioning to convey meaning. This ensures information and relationships are preserved when CSS is disabled or modified.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Common Failures'
  },
  {
    id: '253',
    question: 'How can you avoid the failure of Success Criterion 1.3.1 (F2) regarding text presentation?',
    options: [
      'Using only visual formatting',
      'Applying appropriate semantic markup for text changes',
      'Changing font styles without markup',
      'Removing all text formatting'
    ],
    correctAnswer: 'Applying appropriate semantic markup for text changes',
    explanation: 'To avoid F2 failure, use proper semantic markup (like <em>, <strong>, or ARIA attributes) when changes in text presentation convey meaning, rather than relying solely on visual formatting.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Common Failures'
  },
  {
    id: '254',
    question: 'Which approach prevents the failure of Success Criterion 1.1.1 (F3) regarding CSS background images?',
    options: [
      'Using CSS background-image for all images',
      'Providing text alternatives for important images in HTML',
      'Hiding images from screen readers',
      'Converting all images to CSS backgrounds'
    ],
    correctAnswer: 'Providing text alternatives for important images in HTML',
    explanation: 'To avoid F3 failure, important images should be included using HTML <img> elements with appropriate alt text, rather than CSS background images which cannot convey meaningful information to assistive technologies.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Common Failures'
  },
  {
    id: '255',
    question: 'How can you prevent the failure of Success Criterion 2.2.2 (F4) regarding blinking content?',
    options: [
      'Using CSS text-decoration:blink',
      'Providing a mechanism to stop blinking within 5 seconds',
      'Making content blink indefinitely',
      'Using JavaScript for blinking effects'
    ],
    correctAnswer: 'Providing a mechanism to stop blinking within 5 seconds',
    explanation: 'To avoid F4 failure, any blinking content must either stop within 5 seconds automatically or provide a mechanism for users to stop it. This helps prevent seizures and cognitive difficulties.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Common Failures'
  },
  {
    id: '256',
    question: 'Which practice helps avoid the failure of Success Criterion 1.2.2 (F8) regarding captions?',
    options: [
      'Providing partial captions',
      'Including all dialogue and important sound effects in captions',
      'Using auto-generated captions only',
      'Omitting background sounds'
    ],
    correctAnswer: 'Including all dialogue and important sound effects in captions',
    explanation: 'To avoid F8 failure, captions must include all dialogue and important sound effects, ensuring deaf or hard-of-hearing users have access to all essential audio information.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Common Failures'
  },
  {
    id: '257',
    question: 'How can you prevent the failure of Success Criterion 3.2.5 (F9) regarding context changes?',
    options: [
      'Changing context when focus moves',
      'Waiting for explicit user action before changing context',
      'Using automatic form submission',
      'Implementing automatic updates'
    ],
    correctAnswer: 'Waiting for explicit user action before changing context',
    explanation: 'To avoid F9 failure, context changes should only occur when users explicitly request them, not automatically when focus moves away from an element. This prevents confusion and maintains user control.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Common Failures'
  },
  {
    id: '258',
    question: 'Which approach prevents the failure of Success Criterion 2.1.2 (F10) regarding keyboard traps?',
    options: [
      'Combining formats without keyboard access',
      'Ensuring keyboard navigation through all content',
      'Using mouse-only interactions',
      'Implementing modal dialogs without exits'
    ],
    correctAnswer: 'Ensuring keyboard navigation through all content',
    explanation: 'To avoid F10 failure, ensure that keyboard users can navigate through all content and functionality, including when multiple content formats are combined, without getting trapped.',
    category: 'Techniques',
    difficulty: 'advanced',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Common Failures'
  },
  {
    id: '259',
    question: 'How can you avoid the failure of Success Criterion 2.2.5 (F12) regarding session timeouts?',
    options: [
      'Using fixed session timeouts',
      'Providing mechanisms to extend time and save data',
      'Implementing automatic logouts',
      'Removing all timeouts'
    ],
    correctAnswer: 'Providing mechanisms to extend time and save data',
    explanation: 'To avoid F12 failure, provide users with options to extend their session time and save their data before timeout, ensuring they don\'t lose work due to authentication expiration.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Common Failures'
  },
  {
    id: '260',
    question: 'Which practice prevents the failure of Success Criterion 1.1.1 and 1.4.1 (F13) regarding color information?',
    options: [
      'Using color alone to convey information',
      'Including text alternatives that describe color differences',
      'Removing all color information',
      'Using high contrast colors only'
    ],
    correctAnswer: 'Including text alternatives that describe color differences',
    explanation: 'To avoid F13 failure, ensure that information conveyed through color differences is also available through text alternatives, making it accessible to users who cannot perceive color.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Common Failures'
  },
  {
    id: '261',
    question: 'How can you prevent the failure of Success Criterion 1.3.3 (F14) regarding content identification?',
    options: [
      'Identifying content by shape or location only',
      'Using descriptive text and labels',
      'Relying on visual positioning',
      'Using coordinate-based instructions'
    ],
    correctAnswer: 'Using descriptive text and labels',
    explanation: 'To avoid F14 failure, content must be identified through descriptive text and labels rather than relying solely on shape, size, or spatial location, which may not be perceivable to all users.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Common Failures'
  },
  {
    id: '262',
    question: 'Which approach helps avoid the failure of Success Criterion 4.1.2 (F15) regarding custom controls?',
    options: [
      'Creating controls without ARIA',
      'Using standard HTML controls or proper ARIA implementation',
      'Implementing custom JavaScript only',
      'Avoiding interactive elements'
    ],
    correctAnswer: 'Using standard HTML controls or proper ARIA implementation',
    explanation: 'To avoid F15 failure, use standard HTML controls when possible, or implement custom controls with proper ARIA roles, states, and properties to ensure accessibility API compatibility.',
    category: 'Techniques',
    difficulty: 'advanced',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Common Failures'
  },
  {
    id: '263',
    question: 'How can you prevent the failure of Success Criterion 2.2.2 (F16) regarding scrolling content?',
    options: [
      'Using automatic scrolling without controls',
      'Providing pause and restart mechanisms',
      'Implementing continuous movement',
      'Removing all scrolling content'
    ],
    correctAnswer: 'Providing pause and restart mechanisms',
    explanation: 'To avoid F16 failure, provide mechanisms to pause, stop, or hide any scrolling content that starts automatically and lasts more than 5 seconds, giving users control over moving content.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Common Failures'
  },
  {
    id: '264',
    question: 'Which practice helps avoid the failure of Success Criterion 2.5.1 (F105) regarding path-based gestures?',
    options: [
      'Using path-based gestures only',
      'Providing simple pointer alternatives',
      'Requiring complex gestures',
      'Implementing swipe-only interactions'
    ],
    correctAnswer: 'Providing simple pointer alternatives',
    explanation: 'To avoid F105 failure, ensure that any functionality using path-based gestures can also be operated through simple pointer alternatives, making it accessible to users with motor limitations.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Common Failures'
  },
  {
    id: '265',
    question: 'How can you prevent the failure of Success Criterion 1.4.12 (F104) regarding text spacing?',
    options: [
      'Using fixed text spacing',
      'Ensuring content adapts to custom text spacing',
      'Clipping overflow content',
      'Disabling text adjustments'
    ],
    correctAnswer: 'Ensuring content adapts to custom text spacing',
    explanation: 'To avoid F104 failure, ensure that content remains readable and functional when users adjust text spacing properties, without clipping or overlapping.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Common Failures'
  },
  {
    id: '266',
    question: 'Which approach prevents the failure of Success Criterion 4.1.3 (F103) regarding status messages?',
    options: [
      'Using visual changes only',
      'Implementing proper ARIA roles and properties',
      'Relying on color changes',
      'Using setTimeout for updates'
    ],
    correctAnswer: 'Implementing proper ARIA roles and properties',
    explanation: 'To avoid F103 failure, ensure status messages can be programmatically determined through proper ARIA roles or properties, allowing assistive technologies to announce updates.',
    category: 'Techniques',
    difficulty: 'advanced',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Common Failures'
  },
  {
    id: '267',
    question: 'How can you avoid the failure of Success Criterion 1.4.10 (F102) regarding content reflow?',
    options: [
      'Using fixed-width layouts',
      'Ensuring content remains available after reflow',
      'Hiding content on small screens',
      'Requiring horizontal scrolling'
    ],
    correctAnswer: 'Ensuring content remains available after reflow',
    explanation: 'To avoid F102 failure, ensure that all content remains available and functional when the viewport is resized or content reflows, without requiring horizontal scrolling.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Common Failures'
  },
  {
    id: '268',
    question: 'Which practice prevents the failure of Success Criterion 2.1.4 (F99) regarding character key shortcuts?',
    options: [
      'Using single-character shortcuts only',
      'Providing mechanisms to disable or remap shortcuts',
      'Implementing automatic shortcuts',
      'Using modifier keys exclusively'
    ],
    correctAnswer: 'Providing mechanisms to disable or remap shortcuts',
    explanation: 'To avoid F99 failure, ensure that character key shortcuts can be turned off, remapped, or activated only on focus, preventing accidental activation.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Common Failures'
  },
  {
    id: '269',
    question: 'How can you prevent the failure of Success Criterion 1.4.13 (F95) regarding hover content?',
    options: [
      'Using hover-only interactions',
      'Making hover content hoverable and persistent',
      'Hiding content on hover',
      'Using automatic timeouts'
    ],
    correctAnswer: 'Making hover content hoverable and persistent',
    explanation: 'To avoid F95 failure, ensure that additional content revealed by hover or focus can be hovered over, dismissed, and remains visible until actively dismissed by the user.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Common Failures'
  },
  {
    id: '270',
    question: 'Which approach helps avoid the failure of Success Criterion 2.5.7 (F106) regarding motion actuation?',
    options: [
      'Requiring device motion',
      'Providing interface controls for motion features',
      'Using motion-only interactions',
      'Implementing tilt controls only'
    ],
    correctAnswer: 'Providing interface controls for motion features',
    explanation: 'To avoid F106 failure, ensure that any functionality that can be operated by device motion can also be operated through user interface components, and motion activation can be disabled.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Common Failures'
  },
  {
    id: '271',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 2.5.7 Dragging Movements?',
    options: [
      'Using drag-and-drop as the only input method',
      'Providing both dragging and click/tap alternatives',
      'Requiring precise mouse movements',
      'Using touch-only gestures'
    ],
    correctAnswer: 'Providing both dragging and click/tap alternatives',
    explanation: 'Providing alternatives to dragging movements, such as click/tap operations, successfully implements SC 2.5.7. This ensures that users who cannot perform drag operations can still accomplish tasks.',
    category: 'Techniques',
    difficulty: 'advanced',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/quickref/',
    wasBoKSection: 'Dragging Movements Techniques'
  },
  {
    id: '272',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 2.4.11 Focus Not Obscured (Minimum)?',
    options: [
      'Using a sticky header that partially covers focused elements',
      'Ensuring focused elements are fully visible',
      'Using z-index to layer elements',
      'Scrolling focused elements into view'
    ],
    correctAnswer: 'Ensuring focused elements are fully visible',
    explanation: 'Ensuring that focused elements are fully visible and not obscured by other content successfully implements SC 2.4.11. This helps keyboard users maintain awareness of their current position.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/quickref/',
    wasBoKSection: 'Focus Not Obscured Techniques'
  },
  {
    id: '273',
    question: 'How should help mechanisms be implemented according to WCAG 2.2 Success Criterion 3.2.6 Consistent Help?',
    options: [
      'Maintain consistent locations for help features across pages',
      'Provide context-sensitive help based on user location',
      'Implement help features through modal dialogs',
      'Display help content through hover interactions'
    ],
    correctAnswer: 'Maintain consistent locations for help features across pages',
    explanation: 'WCAG 2.2 SC 3.2.6 requires help mechanisms to maintain consistent locations across pages. This ensures users can reliably find assistance throughout the website without having to learn new patterns or search in different locations. While context-sensitive help and modal dialogs can be useful, the primary requirement is location consistency for help features.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 93,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/quickref/',
    wasBoKSection: 'Consistent Help Techniques'
  },
  {
    id: '274',
    question: 'How should form data entry be handled according to WCAG 2.2 Success Criterion 3.3.7 Redundant Entry?',
    options: [
      'Auto-populate fields with previously provided information',
      'Request confirmation for repeated information entry',
      'Store form data in browser storage',
      'Validate duplicate entries server-side'
    ],
    correctAnswer: 'Auto-populate fields with previously provided information',
    explanation: 'WCAG 2.2 SC 3.3.7 requires that previously entered information is automatically populated when the same information is requested again. This reduces cognitive load and physical effort, particularly benefiting users with memory or motor limitations. While other options like validation and storage are important, auto-population directly addresses the core requirement of preventing unnecessary repetition.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/quickref/',
    wasBoKSection: 'Redundant Entry Techniques'
  },
  {
    id: '275',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 2.4.13 Focus Appearance?',
    options: [
      'Using a 1px dotted outline',
      'Using a solid 2px contrasting border with minimum area',
      'Changing only the background color',
      'Removing focus indicators'
    ],
    correctAnswer: 'Using a solid 2px contrasting border with minimum area',
    explanation: 'Using a solid 2px contrasting border that meets minimum area requirements successfully implements SC 2.4.13. This ensures the focus indicator is clearly visible and meets the enhanced focus appearance requirements.',
    category: 'Techniques',
    difficulty: 'advanced',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/quickref/',
    wasBoKSection: 'Focus Appearance Techniques'
  },
  {
    id: '276',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 3.3.8 Accessible Authentication?',
    options: [
      'Using CAPTCHA as the only verification',
      'Providing cognitive function alternatives',
      'Requiring complex passwords',
      'Using biometric-only authentication'
    ],
    correctAnswer: 'Providing cognitive function alternatives',
    explanation: 'Providing alternatives that do not rely on cognitive function tests successfully implements SC 3.3.8. This ensures users with cognitive disabilities can authenticate without having to remember or transcribe characters.',
    category: 'Techniques',
    difficulty: 'advanced',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/quickref/',
    wasBoKSection: 'Accessible Authentication Techniques'
  },
  {
    id: '277',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 2.5.8 Target Size (Minimum)?',
    options: [
      'Using 16x16 pixel click targets',
      'Providing 24x24 pixel minimum target size',
      'Using variable target sizes',
      'Making all targets 44x44 pixels'
    ],
    correctAnswer: 'Providing 24x24 pixel minimum target size',
    explanation: 'Providing a minimum target size of 24x24 CSS pixels for all non-inline interactive elements successfully implements SC 2.5.8. This ensures targets are large enough to be easily activated.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 93,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/quickref/',
    wasBoKSection: 'Target Size Techniques'
  },
  {
    id: '278',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 4.1.3 Status Messages?',
    options: [
      'Using visual changes only',
      'Using aria-live for dynamic updates',
      'Relying on screen refresh',
      'Using alert dialogs for all messages'
    ],
    correctAnswer: 'Using aria-live for dynamic updates',
    explanation: 'Using appropriate aria-live regions for status messages successfully implements SC 4.1.3. This ensures that updates can be programmatically determined and announced to assistive technology users without receiving focus.',
    category: 'Techniques',
    difficulty: 'advanced',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/quickref/',
    wasBoKSection: 'Status Messages Techniques'
  },
  {
    id: '279',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 1.3.6 Identify Purpose?',
    options: [
      'Using generic ARIA labels',
      'Using semantic HTML and ARIA landmarks',
      'Using decorative images',
      'Using custom attributes'
    ],
    correctAnswer: 'Using semantic HTML and ARIA landmarks',
    explanation: 'Using semantic HTML elements and ARIA landmarks successfully implements SC 1.3.6. This helps identify the purpose of interface components, making it easier for user agents to present and modify content presentation.',
    category: 'Techniques',
    difficulty: 'advanced',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/quickref/',
    wasBoKSection: 'Identify Purpose Techniques'
  },
  {
    id: '280',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 2.5.5 Target Size (Enhanced)?',
    options: [
      'Using 24x24 pixel targets',
      'Providing 44x44 pixel minimum target size',
      'Using inline links of any size',
      'Making targets fill available space'
    ],
    correctAnswer: 'Providing 44x44 pixel minimum target size',
    explanation: 'Providing a minimum target size of 44x44 CSS pixels for all non-inline interactive elements successfully implements SC 2.5.5 (Enhanced). This larger size ensures even better usability for people with motor impairments.',
    category: 'Techniques',
    difficulty: 'advanced',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/quickref/',
    wasBoKSection: 'Target Size Enhanced Techniques'
  },
  {
    id: '281',
    question: 'Which approach best supports WCAG 2.2 application in non-web ICT software?',
    options: [
      'Applying web-specific techniques directly to software',
      'Ignoring success criteria that mention web technologies',
      'Adapting web principles to software-specific contexts',
      'Using only software-specific guidelines'
    ],
    correctAnswer: 'Adapting web principles to software-specific contexts',
    explanation: 'When applying WCAG 2.2 to non-web ICT software, the principles and success criteria should be adapted to software-specific contexts while maintaining the core accessibility objectives. This ensures consistent accessibility across different technology platforms.',
    category: 'Standards',
    difficulty: 'advanced',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/wcag/non-web-ict/',
    wasBoKSection: 'WCAG2ICT Overview'
  },
  {
    id: '282',
    question: 'Which mobile accessibility consideration is most critical for touch target implementation?',
    options: [
      'Using exact pixel measurements from desktop',
      'Considering both physical size and pixel density',
      'Implementing desktop hover states',
      'Relying on device default sizes'
    ],
    correctAnswer: 'Considering both physical size and pixel density',
    explanation: 'For mobile accessibility, touch targets must consider both physical size and pixel density to ensure consistent usability across devices. This accounts for varying screen sizes and resolutions while maintaining appropriate physical touch target sizes for users with motor impairments.',
    category: 'Mobile',
    difficulty: 'advanced',
    rating: 97,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/mobile/',
    wasBoKSection: 'Mobile Accessibility'
  },
  {
    id: '283',
    question: 'What development approach best supports cognitive accessibility in interactive components?',
    options: [
      'Implement consistent patterns with clear feedback',
      'Add animated transitions between states',
      'Use technical terms for precise communication',
      'Require confirmation for all actions'
    ],
    correctAnswer: 'Implement consistent patterns with clear feedback',
    explanation: 'Consistent patterns and clear feedback are essential for cognitive accessibility because they help users understand interactions, predict behavior, and confirm their actions. This approach reduces cognitive load by establishing predictable patterns and providing immediate, clear feedback. While animations and confirmations can be helpful in some cases, overuse can increase cognitive load.',
    category: 'Development',
    difficulty: 'intermediate',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/tips/developing/',
    wasBoKSection: 'Developing for Web Accessibility'
  },
  {
    id: '284',
    question: 'How should form validation be implemented to best support cognitive accessibility?',
    options: [
      'Provide real-time validation with clear guidance',
      'Display all errors after form submission',
      'Highlight fields using color indicators',
      'Implement strict password requirements'
    ],
    correctAnswer: 'Provide real-time validation with clear guidance',
    explanation: 'Real-time validation with clear guidance best supports cognitive accessibility by helping users understand and correct errors as they occur. This approach reduces memory load and provides immediate feedback, making forms more manageable. The validation should include clear instructions, error prevention, and specific guidance for corrections.',
    category: 'Cognitive',
    difficulty: 'intermediate',
    rating: 97,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG2/supplemental/#cognitiveaccessibilityguidance',
    wasBoKSection: 'Cognitive Accessibility Guidance'
  },
  {
    id: '285',
    question: 'How should viewport orientation be handled in mobile accessibility implementation?',
    options: [
      'Lock orientation to portrait mode',
      'Support both orientations with equivalent functionality',
      'Require landscape for complex content',
      'Disable orientation changes'
    ],
    correctAnswer: 'Support both orientations with equivalent functionality',
    explanation: 'Mobile applications should support both portrait and landscape orientations with equivalent functionality, allowing users to choose their preferred orientation based on physical needs, device mounting, or personal preference.',
    category: 'Mobile',
    difficulty: 'intermediate',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/mobile/',
    wasBoKSection: 'Mobile Accessibility Guidelines'
  },
  {
    id: '286',
    question: 'Which approach best supports cognitive accessibility in navigation design?',
    options: [
      'Using innovative navigation patterns',
      'Providing multiple paths to content',
      'Implementing automatic redirects',
      'Using dynamic menu structures'
    ],
    correctAnswer: 'Providing multiple paths to content',
    explanation: 'Providing multiple paths to content supports cognitive accessibility by accommodating different user preferences and mental models. This includes consistent navigation, search functionality, and site maps, allowing users to find content in ways that work best for them.',
    category: 'Cognitive',
    difficulty: 'advanced',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG2/supplemental/#cognitiveaccessibilityguidance',
    wasBoKSection: 'Navigation and Wayfinding'
  },
  {
    id: '287',
    question: 'Which non-web ICT consideration is most important for document accessibility?',
    options: [
      'Using proprietary formats only',
      'Ensuring accessibility features transfer across formats',
      'Restricting to PDF format',
      'Requiring specific software'
    ],
    correctAnswer: 'Ensuring accessibility features transfer across formats',
    explanation: 'When implementing accessibility in non-web documents, it is crucial that accessibility features (such as headings, alternative text, and reading order) transfer correctly across different document formats and platforms to maintain accessibility for all users.',
    category: 'Standards',
    difficulty: 'advanced',
    rating: 97,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/wcag/non-web-ict/',
    wasBoKSection: 'Document Accessibility'
  },
  {
    id: '288',
    question: 'Which development practice best supports both mobile and desktop accessibility?',
    options: [
      'Using separate mobile and desktop sites',
      'Implementing responsive design with accessible features',
      'Providing mobile-only alternatives',
      'Using fixed layouts'
    ],
    correctAnswer: 'Implementing responsive design with accessible features',
    explanation: 'Responsive design with built-in accessibility features ensures consistent accessibility across devices while adapting to different screen sizes and interaction methods. This approach maintains accessibility without requiring separate implementations for different platforms.',
    category: 'Development',
    difficulty: 'advanced',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/tips/developing/',
    wasBoKSection: 'Cross-platform Development'
  },
  {
    id: '289',
    question: 'Which implementation best supports cognitive accessibility in content presentation?',
    options: [
      'Using dense text layouts',
      'Presenting content in manageable chunks with clear structure',
      'Requiring timed responses',
      'Using abstract imagery'
    ],
    correctAnswer: 'Presenting content in manageable chunks with clear structure',
    explanation: 'Breaking content into manageable chunks with clear structure supports cognitive accessibility by reducing cognitive load and making information easier to process and remember. This includes using headings, lists, and appropriate spacing.',
    category: 'Cognitive',
    difficulty: 'intermediate',
    rating: 97,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG2/supplemental/#cognitiveaccessibilityguidance',
    wasBoKSection: 'Content Structure'
  },
  {
    id: '290',
    question: 'Which mobile accessibility feature is most critical for form input fields?',
    options: [
      'Using desktop keyboard layouts',
      'Providing appropriate input types for on-screen keyboards',
      'Requiring complex input patterns',
      'Using fixed input sizes'
    ],
    correctAnswer: 'Providing appropriate input types for on-screen keyboards',
    explanation: 'Using appropriate input types (such as tel, email, number) for mobile form fields ensures that users get the most appropriate on-screen keyboard layout, making data entry more efficient and reducing errors on mobile devices.',
    category: 'Mobile',
    difficulty: 'intermediate',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/mobile/',
    wasBoKSection: 'Mobile Forms'
  },
  {
    id: '291',
    question: 'Which approach best supports low vision accessibility for text resizing?',
    options: [
      'Using fixed font sizes throughout',
      'Supporting zoom up to 200% without loss of functionality',
      'Limiting text resize to headers only',
      'Requiring screen magnification software'
    ],
    correctAnswer: 'Supporting zoom up to 200% without loss of functionality',
    explanation: 'Supporting text resizing and zoom up to at least 200% without loss of content or functionality is crucial for low vision accessibility. This ensures users can adjust text size while maintaining readability and usability of all content.',
    category: 'Low Vision',
    difficulty: 'intermediate',
    rating: 97,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG2/supplemental/#-low-vision-accessibility-guidance',
    wasBoKSection: 'Low Vision Accessibility Guidance'
  },
  {
    id: '292',
    question: 'What is the most effective interim repair for missing form labels?',
    options: [
      'Removing the form entirely',
      'Adding visible text labels adjacent to controls',
      'Using placeholder text only',
      'Changing input colors'
    ],
    correctAnswer: 'Adding visible text labels adjacent to controls',
    explanation: 'Adding visible text labels adjacent to form controls is an effective interim repair that immediately improves accessibility. This helps all users, especially screen reader users, understand the purpose of form controls while proper programmatic labels are being implemented.',
    category: 'Repairs',
    difficulty: 'beginner',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/planning/interim-repairs/',
    wasBoKSection: 'Form Labels'
  },
  {
    id: '293',
    question: 'Which pronunciation guidance implementation best supports screen reader users?',
    options: [
      'Using phonetic spelling in visible text',
      'Implementing proper pronunciation markup',
      'Adding audio files only',
      'Spelling words differently'
    ],
    correctAnswer: 'Implementing proper pronunciation markup',
    explanation: 'Implementing proper pronunciation markup (such as ruby annotations or the IPA pronunciation) provides screen readers with accurate pronunciation information while maintaining visual presentation, ensuring consistent and accurate pronunciation for all users.',
    category: 'Pronunciation',
    difficulty: 'advanced',
    rating: 97,
    wasBoKDomain: 'https://www.w3.org/WAI/pronunciation/',
    wasBoKSection: 'Pronunciation Overview'
  },
  {
    id: '294',
    question: 'What is the most effective interim solution for insufficient color contrast?',
    options: [
      'Removing all colors',
      'Using default browser colors',
      'Increasing contrast of essential content first',
      'Adding patterns to all elements'
    ],
    correctAnswer: 'Increasing contrast of essential content first',
    explanation: 'Prioritizing contrast improvements for essential content is the most effective interim repair for contrast issues. This ensures critical information is immediately more accessible while a comprehensive color scheme update is being developed.',
    category: 'Repairs',
    difficulty: 'intermediate',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/planning/interim-repairs/',
    wasBoKSection: 'Color Contrast'
  },
  {
    id: '295',
    question: 'Which low vision consideration is most important for content reflow?',
    options: [
      'Maintaining fixed layouts',
      'Supporting single-column presentation without horizontal scrolling',
      'Using multiple columns always',
      'Requiring specific viewport sizes'
    ],
    correctAnswer: 'Supporting single-column presentation without horizontal scrolling',
    explanation: 'Supporting content reflow into a single column without requiring horizontal scrolling is crucial for low vision users. This allows content to be readable at increased zoom levels without forcing users to scroll horizontally to read each line.',
    category: 'Low Vision',
    difficulty: 'advanced',
    rating: 97,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG2/supplemental/#-low-vision-accessibility-guidance',
    wasBoKSection: 'Content Reflow'
  },
  {
    id: '296',
    question: 'What is the best interim repair for keyboard accessibility issues?',
    options: [
      'Disabling interactive elements',
      'Adding visible keyboard focus indicators',
      'Removing all JavaScript',
      'Requiring mouse interaction'
    ],
    correctAnswer: 'Adding visible keyboard focus indicators',
    explanation: 'Adding visible keyboard focus indicators is an effective immediate improvement for keyboard accessibility. This helps keyboard users track their location while navigating, even before implementing full keyboard interaction support.',
    category: 'Repairs',
    difficulty: 'intermediate',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/planning/interim-repairs/',
    wasBoKSection: 'Keyboard Access'
  },
  {
    id: '297',
    question: 'Which pronunciation feature is most important for proper names and technical terms?',
    options: [
      'Using only capital letters',
      'Providing pronunciation guidance through markup or glossaries',
      'Avoiding technical terms entirely',
      'Using informal alternatives'
    ],
    correctAnswer: 'Providing pronunciation guidance through markup or glossaries',
    explanation: 'Providing pronunciation guidance through markup or glossaries ensures proper names and technical terms are pronounced correctly by screen readers and understood by users. This is particularly important for specialized vocabulary and multilingual content.',
    category: 'Pronunciation',
    difficulty: 'intermediate',
    rating: 97,
    wasBoKDomain: 'https://www.w3.org/WAI/pronunciation/',
    wasBoKSection: 'Technical Terms'
  },
  {
    id: '298',
    question: 'What is the most effective approach for low vision users regarding text spacing?',
    options: [
      'Using minimal spacing always',
      'Supporting increased text spacing without loss of content',
      'Fixed spacing only',
      'Decreasing line height for efficiency'
    ],
    correctAnswer: 'Supporting increased text spacing without loss of content',
    explanation: 'Supporting increased text spacing (including line height, word spacing, and letter spacing) without loss of content is crucial for low vision users. This allows for better readability and comprehension while maintaining content integrity.',
    category: 'Low Vision',
    difficulty: 'intermediate',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG2/supplemental/#-low-vision-accessibility-guidance',
    wasBoKSection: 'Text Spacing'
  },
  {
    id: '299',
    question: 'Which interim repair is most effective for images lacking alternative text?',
    options: [
      'Removing all images',
      'Adding brief descriptive text in adjacent content',
      'Using generic alt text',
      'Hiding images from screen readers'
    ],
    correctAnswer: 'Adding brief descriptive text in adjacent content',
    explanation: 'Adding brief descriptive text in content adjacent to images is an effective interim repair when proper alt text is missing. This ensures essential image information is available to all users while proper alternative text is being implemented.',
    category: 'Repairs',
    difficulty: 'beginner',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/planning/interim-repairs/',
    wasBoKSection: 'Alternative Text'
  },
  {
    id: '300',
    question: 'What is the most important consideration for pronunciation in navigation landmarks?',
    options: [
      'Using uncommon words',
      'Ensuring consistent pronunciation of repeated elements',
      'Changing pronunciations regularly',
      'Using abbreviations only'
    ],
    correctAnswer: 'Ensuring consistent pronunciation of repeated elements',
    explanation: 'Ensuring consistent pronunciation of repeated elements in navigation landmarks helps users build a mental model of the site structure. This consistency in pronunciation aids in navigation and orientation, particularly for screen reader users.',
    category: 'Pronunciation',
    difficulty: 'advanced',
    rating: 97,
    wasBoKDomain: 'https://www.w3.org/WAI/pronunciation/',
    wasBoKSection: 'Navigation Elements'
  },
  {
    id: '301',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 3.1.3 Unusual Words?',
    options: [
      'Implementing an interactive glossary with contextual definitions',
      'Providing inline explanations with expandable details',
      'Using simplified language exclusively',
      'Replacing technical terms with basic vocabulary'
    ],
    correctAnswer: 'Implementing an interactive glossary with contextual definitions',
    explanation: 'Implementing an interactive glossary with contextual definitions best satisfies SC 3.1.3 by: 1) Providing immediate access to definitions through interactive mechanisms, 2) Maintaining technical accuracy while ensuring understanding, 3) Supporting both inline and linked definitions for flexibility, 4) Allowing users to learn domain-specific vocabulary in context, and 5) Ensuring consistent identification of unusual terms throughout the content.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Unusual Words'
  },
  {
    id: '302',
    question: 'Which technique best implements WCAG 2.2 Success Criterion 3.1.4 Abbreviations?',
    options: [
      'Implementing expandable abbreviation definitions',
      'Using only common abbreviations',
      'Avoiding abbreviations entirely',
      'Providing a separate glossary page'
    ],
    correctAnswer: 'Implementing expandable abbreviation definitions',
    explanation: 'Implementing expandable abbreviation definitions best satisfies SC 3.1.4 by providing immediate access to the expanded form of abbreviations while maintaining document flow and readability.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Abbreviations'
  },
  {
    id: '303',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 3.1.5 Reading Level?',
    options: [
      'Providing simplified versions of complex content',
      'Using technical language exclusively',
      'Removing all specialized terms',
      'Limiting sentence length only'
    ],
    correctAnswer: 'Providing simplified versions of complex content',
    explanation: 'Providing simplified versions of complex content implements SC 3.1.5 by ensuring content is accessible to users with different reading abilities while maintaining the original technical information.',
    category: 'Techniques',
    difficulty: 'advanced',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Reading Level'
  },
  {
    id: '304',
    question: 'Which technique best implements WCAG 2.2 Success Criterion 3.1.6 Pronunciation?',
    options: [
      'Providing audio pronunciation guides',
      'Using phonetic spelling only',
      'Removing difficult words',
      'Including dictionary links'
    ],
    correctAnswer: 'Providing audio pronunciation guides',
    explanation: 'Providing audio pronunciation guides implements SC 3.1.6 by ensuring users can access the correct pronunciation of words where meaning is ambiguous without pronunciation information.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Pronunciation'
  },
  {
    id: '305',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 3.3.5 Help?',
    options: [
      'Implementing context-aware help systems with multiple formats',
      'Providing static FAQ pages',
      'Using automated chatbot support',
      'Displaying error messages with generic guidance'
    ],
    correctAnswer: 'Implementing context-aware help systems with multiple formats',
    explanation: 'Implementing context-aware help systems with multiple formats best satisfies SC 3.3.5 by: 1) Providing help relevant to the user\'s current context and task, 2) Offering multiple formats including text, video, and interactive guides, 3) Ensuring help content is accessible through both keyboard and touch interfaces, 4) Supporting progressive disclosure of complex information, and 5) Maintaining consistency in help mechanisms across the application.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Help'
  },
  {
    id: '306',
    question: 'Which technique most effectively implements WCAG 2.2 Success Criterion 2.5.5 Target Size (Enhanced) for touch interfaces?',
    options: [
      'Implementing touch targets of exactly 44x44 CSS pixels',
      'Providing touch targets of at least 44x44 CSS pixels with adequate spacing',
      'Using viewport-relative sizing for all interactive elements',
      'Adding padding to achieve minimum clickable areas'
    ],
    correctAnswer: 'Providing touch targets of at least 44x44 CSS pixels with adequate spacing',
    explanation: 'Providing touch targets of at least 44x44 CSS pixels with adequate spacing best implements SC 2.5.5 (Enhanced) by: 1) Ensuring targets are large enough for reliable touch interaction, 2) Preventing accidental activation of adjacent elements through proper spacing, 3) Supporting users with motor impairments or larger fingers, 4) Maintaining consistency across different device sizes and orientations, and 5) Exceeding the minimum requirements while following touch interface best practices.',
    category: 'Techniques',
    difficulty: 'advanced',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Target Size Enhanced'
  },
  {
    id: '307',
    question: 'Which technique best implements WCAG 2.2 Success Criterion 1.3.6 Identify Purpose?',
    options: [
      'Using generic ARIA landmarks',
      'Implementing purpose attributes for interface components',
      'Adding random IDs to elements',
      'Removing semantic markup'
    ],
    correctAnswer: 'Implementing purpose attributes for interface components',
    explanation: 'Implementing purpose attributes for interface components implements SC 1.3.6 by programmatically identifying the purpose of user interface components, controls, and regions to support personalization.',
    category: 'Techniques',
    difficulty: 'advanced',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Identify Purpose'
  },
  {
    id: '308',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 2.4.11 Focus Not Obscured (Minimum)?',
    options: [
      'Using absolute positioning for all elements',
      'Ensuring at least 90% of focused element is visible',
      'Hiding focus indicators',
      'Disabling keyboard navigation'
    ],
    correctAnswer: 'Ensuring at least 90% of focused element is visible',
    explanation: 'Ensuring at least 90% of focused element is visible implements SC 2.4.11 by preventing focused elements from being substantially obscured by other content.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Focus Not Obscured'
  },
  {
    id: '309',
    question: 'Which technique best implements WCAG 2.2 Success Criterion 2.5.8 Target Size (Minimum)?',
    options: [
      'Using variable target sizes',
      'Implementing targets of at least 24x24 CSS pixels',
      'Requiring precise pointer control',
      'Ignoring touch interfaces'
    ],
    correctAnswer: 'Implementing targets of at least 24x24 CSS pixels',
    explanation: 'Implementing targets of at least 24x24 CSS pixels implements SC 2.5.8 by ensuring that interactive targets are large enough to be activated without accidentally triggering adjacent elements.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Target Size'
  },
  {
    id: '310',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 3.2.6 Consistent Help?',
    options: [
      'Randomizing help locations',
      'Maintaining consistent help mechanisms across pages',
      'Using different help icons per page',
      'Hiding help on mobile devices'
    ],
    correctAnswer: 'Maintaining consistent help mechanisms across pages',
    explanation: 'Maintaining consistent help mechanisms across pages implements SC 3.2.6 by ensuring help features are located in the same relative order and identified consistently throughout the website.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Consistent Help'
  },
  {
    id: '311',
    question: 'Which technique best implements WCAG 2.2 Success Criterion 3.3.7 Redundant Entry?',
    options: [
      'Requiring data re-entry',
      'Auto-filling previously provided information',
      'Clearing form data regularly',
      'Using temporary storage only'
    ],
    correctAnswer: 'Auto-filling previously provided information',
    explanation: 'Auto-filling previously provided information implements SC 3.3.7 by ensuring users do not have to re-enter information they have already provided during the same process.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Redundant Entry'
  },
  {
    id: '312',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 3.3.8 Accessible Authentication?',
    options: [
      'Using complex CAPTCHAs',
      'Implementing cognitive-free authentication methods',
      'Requiring memory tests',
      'Using handwriting recognition'
    ],
    correctAnswer: 'Implementing cognitive-free authentication methods',
    explanation: 'Implementing cognitive-free authentication methods implements SC 3.3.8 by providing authentication options that do not rely on cognitive function tests or memorization.',
    category: 'Techniques',
    difficulty: 'advanced',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Accessible Authentication'
  },
  {
    id: '313',
    question: 'Which technique best implements WCAG 2.2 Success Criterion 3.3.9 Accessible Authentication (Enhanced)?',
    options: [
      'Using personal knowledge questions',
      'Implementing biometric authentication options',
      'Requiring password memorization',
      'Using timed challenges'
    ],
    correctAnswer: 'Implementing biometric authentication options',
    explanation: 'Implementing biometric authentication options implements SC 3.3.9 by providing authentication methods that do not rely on cognitive skills or memory, offering enhanced accessibility.',
    category: 'Techniques',
    difficulty: 'advanced',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Accessible Authentication Enhanced'
  },
  {
    id: '314',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 2.4.13 Focus Appearance (Enhanced)?',
    options: [
      'Using subtle focus indicators',
      'Implementing high-contrast focus indicators with minimum area',
      'Removing focus outlines',
      'Using browser defaults'
    ],
    correctAnswer: 'Implementing high-contrast focus indicators with minimum area',
    explanation: 'Implementing high-contrast focus indicators with minimum area implements SC 2.4.13 by ensuring focus indicators have sufficient contrast and cover an adequate area of the focused element.',
    category: 'Techniques',
    difficulty: 'advanced',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Focus Appearance Enhanced'
  },
  {
    id: '315',
    question: 'Which technique best implements WCAG 2.2 Success Criterion 2.5.7 Dragging Movements?',
    options: [
      'Using drag-only interactions',
      'Providing pointer alternatives to dragging',
      'Requiring complex gestures',
      'Implementing touch-only controls'
    ],
    correctAnswer: 'Providing pointer alternatives to dragging',
    explanation: 'Providing pointer alternatives to dragging implements SC 2.5.7 by ensuring all functionality that uses dragging movements can be operated through single pointer actions without dragging.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Dragging Movements'
  },
  {
    id: '316',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 2.4.12 Focus Not Obscured (Enhanced)?',
    options: [
      'Using partial visibility',
      'Ensuring complete visibility of focused elements',
      'Hiding focus indicators',
      'Using transparent overlays'
    ],
    correctAnswer: 'Ensuring complete visibility of focused elements',
    explanation: 'Ensuring complete visibility of focused elements implements SC 2.4.12 by preventing any part of the focused element from being obscured by other content.',
    category: 'Techniques',
    difficulty: 'advanced',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Focus Not Obscured Enhanced'
  },
  {
    id: '317',
    question: 'Which technique best implements WCAG 2.2 Success Criterion 2.5.5 Target Size (Enhanced)?',
    options: [
      'Using minimum target sizes',
      'Implementing targets of at least 44x44 CSS pixels',
      'Requiring precise clicking',
      'Using small touch targets'
    ],
    correctAnswer: 'Implementing targets of at least 44x44 CSS pixels',
    explanation: 'Implementing targets of at least 44x44 CSS pixels implements SC 2.5.5 by providing larger touch targets that are easier to activate and reduce accidental activation of adjacent elements.',
    category: 'Techniques',
    difficulty: 'advanced',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Target Size Enhanced'
  },
  {
    id: '318',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 3.2.6 Consistent Help?',
    options: [
      'Using inconsistent help locations',
      'Providing help mechanisms in consistent locations',
      'Hiding help features',
      'Using random help icons'
    ],
    correctAnswer: 'Providing help mechanisms in consistent locations',
    explanation: 'Providing help mechanisms in consistent locations implements SC 3.2.6 by ensuring help features are consistently placed and identified across multiple web pages.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Consistent Help'
  },
  {
    id: '319',
    question: 'Which technique best implements WCAG 2.2 Success Criterion 3.3.7 Redundant Entry?',
    options: [
      'Requiring data re-entry',
      'Implementing auto-save functionality',
      'Using session timeouts',
      'Clearing form data'
    ],
    correctAnswer: 'Implementing auto-save functionality',
    explanation: 'Implementing auto-save functionality implements SC 3.3.7 by preserving user-entered data and preventing unnecessary re-entry of information.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Redundant Entry'
  },
  {
    id: '320',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 3.3.8 Accessible Authentication?',
    options: [
      'Using memory-based verification',
      'Implementing passwordless authentication',
      'Requiring complex CAPTCHAs',
      'Using timed challenges'
    ],
    correctAnswer: 'Implementing passwordless authentication',
    explanation: 'Implementing passwordless authentication implements SC 3.3.8 by providing authentication methods that do not rely on cognitive function tests or memorization.',
    category: 'Techniques',
    difficulty: 'advanced',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Accessible Authentication'
  },
  {
    id: '321',
    question: 'Which technique best implements WCAG 2.2 Success Criterion 2.4.11 Focus Not Obscured?',
    options: [
      'Using fixed headers without adjustment',
      'Implementing scroll padding for focused elements',
      'Hiding focus indicators',
      'Using overlapping content'
    ],
    correctAnswer: 'Implementing scroll padding for focused elements',
    explanation: 'Implementing scroll padding for focused elements implements SC 2.4.11 by ensuring focused elements are not obscured by fixed content when scrolled into view.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Focus Not Obscured'
  },
  {
    id: '322',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 2.5.8 Target Size?',
    options: [
      'Using variable target sizes',
      'Implementing consistent minimum target sizes',
      'Requiring precise clicking',
      'Using small touch targets'
    ],
    correctAnswer: 'Implementing consistent minimum target sizes',
    explanation: 'Implementing consistent minimum target sizes implements SC 2.5.8 by ensuring interactive elements are large enough to be easily activated without accidentally triggering adjacent elements.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Target Size'
  },
  {
    id: '323',
    question: 'Which technique best implements WCAG 2.2 Success Criterion 3.2.6 Consistent Help?',
    options: [
      'Using dynamic help locations',
      'Maintaining consistent help mechanisms',
      'Hiding help on mobile',
      'Using contextual help only'
    ],
    correctAnswer: 'Maintaining consistent help mechanisms',
    explanation: 'Maintaining consistent help mechanisms implements SC 3.2.6 by ensuring help features are consistently located and identified across web pages.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Consistent Help'
  },
  {
    id: '324',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 3.3.7 Redundant Entry?',
    options: [
      'Using session storage only',
      'Implementing data persistence across sessions',
      'Requiring data re-entry',
      'Clearing form data regularly'
    ],
    correctAnswer: 'Implementing data persistence across sessions',
    explanation: 'Implementing data persistence across sessions implements SC 3.3.7 by ensuring users do not have to re-enter information they have previously provided.',
    category: 'Techniques',
    difficulty: 'advanced',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Redundant Entry'
  },
  {
    id: '325',
    question: 'Which technique best implements WCAG 2.2 Success Criterion 3.3.8 Accessible Authentication?',
    options: [
      'Using knowledge-based authentication',
      'Implementing device-based authentication',
      'Requiring complex passwords',
      'Using timed verification'
    ],
    correctAnswer: 'Implementing device-based authentication',
    explanation: 'Implementing device-based authentication implements SC 3.3.8 by providing authentication methods that do not rely on cognitive function tests or memorization.',
    category: 'Techniques',
    difficulty: 'advanced',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Accessible Authentication'
  },
  {
    id: '326',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 2.4.13 Focus Appearance?',
    options: [
      'Using default focus styles',
      'Implementing custom focus indicators with sufficient contrast',
      'Removing focus outlines',
      'Using color changes only'
    ],
    correctAnswer: 'Implementing custom focus indicators with sufficient contrast',
    explanation: 'Implementing custom focus indicators with sufficient contrast implements SC 2.4.13 by ensuring focus indicators are clearly visible and meet minimum contrast requirements.',
    category: 'Techniques',
    difficulty: 'advanced',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/Techniques/',
    wasBoKSection: 'Focus Appearance'
  },
  {
    id: '327',
    question: 'According to ACT rules, how should HTML page language be specified?',
    options: [
      'Using meta tags only',
      'Implementing valid lang attribute on html element',
      'Specifying language in comments',
      'Setting language through JavaScript'
    ],
    correctAnswer: 'Implementing valid lang attribute on html element',
    explanation: 'ACT rules require the HTML page language to be specified using a valid lang attribute on the html element, ensuring proper interpretation by assistive technologies.',
    category: 'Testing',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/act/rules/',
    wasBoKSection: 'HTML Page Language'
  },
  {
    id: '328',
    question: 'Which practice correctly implements ACT rules for image buttons?',
    options: [
      'Using empty alt attributes',
      'Providing descriptive accessible names',
      'Omitting alt attributes',
      'Using generic text alternatives'
    ],
    correctAnswer: 'Providing descriptive accessible names',
    explanation: 'ACT rules require image buttons to have descriptive accessible names that clearly indicate their purpose and function to users of assistive technologies.',
    category: 'Testing',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/act/rules/',
    wasBoKSection: 'Image Buttons'
  },
  {
    id: '329',
    question: 'According to ACT rules, how should meta viewport scaling be implemented?',
    options: [
      'Disabling zoom completely',
      'Allowing users to zoom and scale content',
      'Setting maximum-scale to 1',
      'Removing viewport meta tag'
    ],
    correctAnswer: 'Allowing users to zoom and scale content',
    explanation: 'ACT rules specify that meta viewport must not restrict zoom and scaling on mobile devices, ensuring users can adjust content size according to their needs.',
    category: 'Testing',
    difficulty: 'intermediate',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/act/rules/',
    wasBoKSection: 'Meta Viewport Scaling'
  },
  {
    id: '330',
    question: 'Which approach correctly implements ACT rules for orientation lock?',
    options: [
      'Locking to portrait mode',
      'Allowing both portrait and landscape orientations',
      'Forcing landscape orientation',
      'Implementing device-specific locks'
    ],
    correctAnswer: 'Allowing both portrait and landscape orientations',
    explanation: 'ACT rules require content to be viewable and operable in both portrait and landscape orientations unless a specific orientation is essential.',
    category: 'Testing',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/act/rules/',
    wasBoKSection: 'Orientation Lock'
  },
  {
    id: '331',
    question: 'How should error identification be implemented according to ACT rules?',
    options: [
      'Using color changes only',
      'Providing programmatically determinable error messages',
      'Displaying generic alerts',
      'Removing error indicators'
    ],
    correctAnswer: 'Providing programmatically determinable error messages',
    explanation: 'ACT rules require error messages to be programmatically determinable, ensuring they can be identified and understood by assistive technologies.',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/act/rules/',
    wasBoKSection: 'Error Identification'
  },
  {
    id: '332',
    question: 'Which practice correctly implements ACT rules for focus appearance?',
    options: [
      'Removing focus indicators',
      'Implementing visible focus indicators with sufficient contrast',
      'Using subtle outlines',
      'Relying on browser defaults'
    ],
    correctAnswer: 'Implementing visible focus indicators with sufficient contrast',
    explanation: 'ACT rules require focus indicators to be clearly visible with sufficient contrast against their background, helping keyboard users track their position.',
    category: 'Testing',
    difficulty: 'intermediate',
    rating: 94,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/act/rules/',
    wasBoKSection: 'Focus Appearance'
  },
  {
    id: '333',
    question: 'According to ACT rules, how should role presentation be implemented?',
    options: [
      'Applying role="presentation" to all elements',
      'Using presentation role only on elements without semantic meaning',
      'Removing ARIA roles completely',
      'Adding presentation roles to interactive elements'
    ],
    correctAnswer: 'Using presentation role only on elements without semantic meaning',
    explanation: 'ACT rules specify that role="presentation" should only be applied to elements that do not convey semantic meaning, preserving accessibility information where needed.',
    category: 'Testing',
    difficulty: 'advanced',
    rating: 95,
    wasBoKDomain: 'https://www.w3.org/WAI/standards-guidelines/act/rules/',
    wasBoKSection: 'Role Presentation'
  },
];

export function getRandomQuestions(count: number): QuizQuestion[] {
  const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
} 