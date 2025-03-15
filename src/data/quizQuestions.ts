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
    question: 'Which approach best supports accessibility in JavaScript implementations according to WASBoK Domain One B?',
    options: [
      'Using JavaScript as the sole interaction method',
      'Ensuring functionality with JavaScript disabled',
      'Implementing complex client-side processing',
      'Requiring modern JavaScript features'
    ],
    correctAnswer: 'Ensuring functionality with JavaScript disabled',
    explanation: 'WASBoK Domain One B emphasizes the importance of progressive enhancement and ensuring core functionality works without JavaScript. This ensures accessibility for users who may have JavaScript disabled or unavailable.',
    wasBoKDomain: 'Domain One: Creating Accessible Web Solutions',
    wasBoKSection: 'Domain One B: Basic knowledge of programming',
    category: 'Development',
    difficulty: 'advanced',
    rating: 97
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
  }
];

export const getRandomQuestions = (count: number): QuizQuestion[] => {
  if (count > quizQuestions.length) {
    console.warn(`Requested ${count} questions but only ${quizQuestions.length} are available.`);
    return [...quizQuestions];
  }
  const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}; 