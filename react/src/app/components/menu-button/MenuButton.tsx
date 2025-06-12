import { GoabMenuButton, GoabMenuAction } from "@abgov/react-components";

export function MenuButton() {
  const handleMenuAction = (action: string) => {
    console.log("Menu action triggered:", action);
    alert(`Action: ${action}`);
  };

  return (
    <div>
      <h1>Menu Button Examples</h1>
      
      <h3>Primary Menu Button</h3>
      <GoabMenuButton 
        text="Menu Button" 
        type="primary" 
        onAction={handleMenuAction}
      >
        <GoabMenuAction text="Edit" action="edit" icon="create" />
        <GoabMenuAction text="View" action="view" icon="eye" />
        <GoabMenuAction text="Delete" action="delete" icon="trash" />
      </GoabMenuButton>

      <h3>Secondary Menu Button</h3>
      <GoabMenuButton 
        text="Actions" 
        type="secondary" 
        onAction={handleMenuAction}
      >
        <GoabMenuAction text="Copy" action="copy" icon="copy" />
        <GoabMenuAction text="Share" action="share" icon="share" />
        <GoabMenuAction text="Print" action="print" icon="print" />
      </GoabMenuButton>

      <h3>Tertiary Menu Button</h3>
      <GoabMenuButton 
        text="Options" 
        type="tertiary" 
        onAction={handleMenuAction}
      >
        <GoabMenuAction text="Settings" action="settings" icon="settings" />
        <GoabMenuAction text="Help" action="help" icon="help" />
      </GoabMenuButton>
    </div>
  );
}

export default MenuButton;