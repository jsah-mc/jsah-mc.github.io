export default function NixDots() {
  return (
    <div>
      <h1 className="text-3xl">Install Nixos Dotfiles</h1>
      <p>
        You Must Have home manager vim hyprland kitty and git installed and
        nixos flakes enabled
      </p>
      <p>First, clone the repository:</p>
      <pre>
        <code>
          git clone https://github.com/jsah-mc/home-manager.git
          ~/.config/home-manager
        </code>
      </pre>
      <p>Then, run the following commands:</p>
      <pre>
        <code>
          home-manager switch && <br />
          git clone https://github.com/orangc/walls-catppuccin-mocha.git
          ~/walls-catppuccin-mocha
        </code>
      </pre>
      <p>
        Finally, run the following command to apply the changes and login into
        hyprland
      </p>
    </div>
  );
}
