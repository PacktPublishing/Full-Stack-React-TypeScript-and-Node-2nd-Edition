import "./HomeLayout.css";

export default function HomeLayout() {
  return (
    <div className="home-layout">
      <nav className="left-col">
        <a>Menu A</a>
        <a>Menu B</a>
        <a>Menu C</a>
      </nav>
      <div className="middle-col">Main Content</div>
      <div className="right-col">Miscellaneous Info</div>
    </div>
  );
}
