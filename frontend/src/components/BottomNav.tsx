import Dock from "@/blocks/Components/Dock/Dock";
import { Home, Archive, User, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();
  const items = [
    { icon: <Home size={18} />, label: 'Home', onClick: () => navigate('/') },
    { icon: <Archive size={18} />, label: 'Archive', onClick: () => navigate('/archive') },
    { icon: <User size={18} />, label: 'Profile', onClick: () => navigate('/profile') },
    { icon: <Settings size={18} />, label: 'Settings', onClick: () => navigate('/settings') },
  ];
  return (

    <Dock
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={80}
    />

  )
}