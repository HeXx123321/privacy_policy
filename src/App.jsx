import './App.css'

function App() {

  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>

      <p>
        <strong>Applies to:</strong> the Quote App training application, published to Google Play
        internal testing as part of a Flutter training course.
      </p>

      <p>
        <strong>Last updated:</strong> 10 September 2026
      </p>

      <hr />

      <h2>The short version</h2>
      <p>
        This app does not collect your data. Nothing you type into it leaves your phone.
      </p>

      <hr />

      <h2>What the app asks for</h2>
      <p>
        To produce an illustrative insurance premium, the app asks you to enter:
      </p>
      <ul>
        <li>Vehicle make</li>
        <li>Vehicle year</li>
        <li>Driver age</li>
        <li>Level of cover</li>
      </ul>

      <h2>What happens to it</h2>
      <p>
        That information is used <strong>on your device only</strong>, to calculate an example
        premium and display it back to you. The calculation runs locally in the app.
      </p>
      <p>
        The app has no server, makes no network requests, and declares no internet
        permission. There is no account, no login, and no way for us to see anything
        you enter.
      </p>

      <h2>What we do not do</h2>
      <ul>
        <li>We do not transmit your information anywhere</li>
        <li>We do not store it on any server</li>
        <li>We do not share or sell it to anyone</li>
        <li>We do not use analytics, advertising, tracking or crash-reporting services</li>
        <li>We do not use third-party SDKs that collect data</li>
      </ul>

      <h2>Storage on your device</h2>
      <p>
        Anything the app remembers between launches is kept in your device's own local
        app storage. Uninstalling the app removes it. It is never uploaded.
      </p>

      <h2>Children</h2>
      <p>
        This app is not directed at children, and collects no information from anyone.
      </p>

      <h2>This is a training application</h2>
      <p>
        The premium figures this app produces are illustrative only. They are not a
        quote, not an offer of insurance, and carry no commercial meaning.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, the updated version will be posted at this address with
        a new &quot;last updated&quot; date.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy: <strong>&lt;CONTACT EMAIL — replace before submitting&gt;</strong>
      </p>
    </div>
  );
};

export default App
