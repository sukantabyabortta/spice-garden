import Announcements from "./Announcements";
import AnnouncementsData from "./aannouncementsData";
import RightColumn from "./RightColumn";
import rightColumnData from "./rightColumnData";


function MainLayout() {
  return (
    <main className="main-content">
      <div className="container">
        <div className="content-grid">

          <Announcements anData={AnnouncementsData} />
          <RightColumn {...rightColumnData} />

        </div>
      </div>
    </main>
  );
}

export default MainLayout;
