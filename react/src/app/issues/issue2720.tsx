import { GoabTabs, GoabTab, GoabButton } from "@abgov/react-components";

export const Issue2720 = () => {
  const navigateToTab = (tabId: string) => {
    window.location.hash = tabId;
  };

  return (
    <>
      <h2>Issue #2720: Change the loaded tab via a link on the same page</h2>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Navigation Links</h3>
        <p>Click these buttons to navigate to specific tabs:</p>
        <div style={{ display: 'flex', gap: '1rem', margin: '1rem 0' }}>
          <GoabButton type="tertiary" onClick={() => navigateToTab('tab-0')}>
            Go to Tab 1
          </GoabButton>
          <GoabButton type="tertiary" onClick={() => navigateToTab('tab-1')}>
            Go to Tab 2
          </GoabButton>
          <GoabButton type="tertiary" onClick={() => navigateToTab('tab-2')}>
            Go to Tab 3
          </GoabButton>
        </div>
        
        <p>Or use these anchor links:</p>
        <ul>
          <li><a href="#tab-0">Direct link to Tab 1</a></li>
          <li><a href="#tab-1">Direct link to Tab 2</a></li>
          <li><a href="#tab-2">Direct link to Tab 3</a></li>
        </ul>
      </div>

      <GoabTabs>
        <GoabTab heading="Tab 1">
          <h3>First Tab Content</h3>
          <p>This is the content of the first tab. You can navigate to other tabs using the links above.</p>
          <p>The URL hash will update to reflect the current tab, and you can share or bookmark specific tabs.</p>
        </GoabTab>
        
        <GoabTab heading="Tab 2">
          <h3>Second Tab Content</h3>
          <p>This is the content of the second tab. Notice how the URL changed when you navigated here.</p>
          <p>You can also use the browser's back/forward buttons to navigate between tabs.</p>
        </GoabTab>
        
        <GoabTab heading="Tab 3">
          <h3>Third Tab Content</h3>
          <p>This is the content of the third tab. The hash-based navigation allows for:</p>
          <ul>
            <li>Deep linking to specific tabs</li>
            <li>Browser history support</li>
            <li>Bookmarkable tab states</li>
          </ul>
        </GoabTab>
      </GoabTabs>

      <div style={{ marginTop: '2rem' }}>
        <h3>Features Demonstrated</h3>
        <ul>
          <li>Navigate to tabs using JavaScript (via button clicks)</li>
          <li>Navigate to tabs using regular anchor links</li>
          <li>URL hash updates when switching tabs</li>
          <li>Browser back/forward navigation works with tabs</li>
          <li>Direct linking to specific tabs via URL hash</li>
        </ul>
      </div>
    </>
  );
};