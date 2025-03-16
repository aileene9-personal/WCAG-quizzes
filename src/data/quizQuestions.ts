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
    correctAnswer: '4.5:1 for all text',
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
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 3.2.6 Consistent Help?',
    options: [
      'Placing help links in different locations',
      'Maintaining consistent help mechanism locations',
      'Hiding help options in menus',
      'Using different help icons'
    ],
    correctAnswer: 'Maintaining consistent help mechanism locations',
    explanation: 'Maintaining consistent locations for help mechanisms across pages successfully implements SC 3.2.6. This ensures users can reliably find assistance when needed throughout the website.',
    category: 'Techniques',
    difficulty: 'intermediate',
    rating: 93,
    wasBoKDomain: 'https://www.w3.org/WAI/WCAG22/quickref/',
    wasBoKSection: 'Consistent Help Techniques'
  },
  {
    id: '274',
    question: 'Which technique successfully implements WCAG 2.2 Success Criterion 3.3.7 Redundant Entry?',
    options: [
      'Requiring users to re-enter information',
      'Auto-filling previously provided information',
      'Clearing form fields on errors',
      'Using session timeouts'
    ],
    correctAnswer: 'Auto-filling previously provided information',
    explanation: 'Auto-filling previously provided information successfully implements SC 3.3.7. This prevents unnecessary repetition and reduces the burden on users, especially those with cognitive or motor disabilities.',
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
    question: 'Which development practice best supports cognitive accessibility in interactive components?',
    options: [
      'Using complex animations for engagement',
      'Providing consistent, predictable patterns with clear feedback',
      'Implementing automatic timeouts for security',
      'Using technical terminology for precision'
    ],
    correctAnswer: 'Providing consistent, predictable patterns with clear feedback',
    explanation: 'Consistent patterns and clear feedback are essential for cognitive accessibility. This approach helps users understand how to interact with components, predict their behavior, and confirm their actions, reducing cognitive load and potential confusion.',
    category: 'Development',
    difficulty: 'intermediate',
    rating: 96,
    wasBoKDomain: 'https://www.w3.org/WAI/tips/developing/',
    wasBoKSection: 'Developing for Web Accessibility'
  },
  {
    id: '284',
    question: 'Which implementation best supports cognitive accessibility in form validation?',
    options: [
      'Displaying all errors after submission',
      'Providing real-time validation with clear guidance',
      'Using color-only error indicators',
      'Requiring complex password rules'
    ],
    correctAnswer: 'Providing real-time validation with clear guidance',
    explanation: 'Real-time validation with clear guidance supports cognitive accessibility by helping users understand and correct errors as they occur. This reduces memory load and provides immediate feedback, making forms more manageable for users with cognitive disabilities.',
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
  }
];

export function getRandomQuestions(count: number = 10, type: 'all' | 'wcag' | 'general' = 'all'): QuizQuestion[] {
  // Filter questions based on type
  const filteredQuestions = type === 'all' 
    ? quizQuestions // Return all questions for 'all' type
    : type === 'wcag'
      ? quizQuestions.filter(q => q.wcagCriterion) // Select questions with wcagCriterion field
      : quizQuestions.filter(q => !q.wcagCriterion); // Select questions without wcagCriterion field

  // Log filtering results
  console.log(`Question type: ${type}`);
  console.log(`Total questions: ${quizQuestions.length}`);
  console.log(`Filtered questions: ${filteredQuestions.length}`);
  
  // Shuffle and return requested number of questions
  const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, Math.min(count, filteredQuestions.length));
  
  console.log(`Selected ${selected.length} questions`);
  return selected;
} 