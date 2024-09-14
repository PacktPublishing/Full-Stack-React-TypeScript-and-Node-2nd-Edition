import { Layout } from "../../common/components/Layout";
import { NavAnchor } from "../../common/components/NavAnchor";
import { Outlet } from "react-router-dom";
import { useUserProfile } from "../../common/redux/profile/ProfileHooks";

export function Write() {
  const [profile] = useUserProfile();

  return (
    <Layout>
      <div
        className={!profile ? "home-single" : "home-double"}
        style={{ marginTop: "1em" }}
      >
        {!profile ? (
          <div
            style={{
              color: "var(--warning-cl)",
              width: "100%",
              marginTop: "2.5em",
              fontSize: "1.15em",
            }}
          >
            You must be connected with a valid profile in order to start
            writing. Please connect first.
          </div>
        ) : (
          <>
            <nav className="home-menu" style={{ marginTop: "1em" }}>
              <span
                className="standard-header"
                style={{ fontSize: "20px", marginBottom: "1em" }}
              >
                Manage Content
              </span>
              <span className="vertical-links">
                <span style={{ marginBottom: ".5em" }}>
                  <NavAnchor path="/write/manage" label="Manage Stories" />
                </span>
                <NavAnchor path="/write/new" label="New Story" />
              </span>
            </nav>
            <Outlet />
          </>
        )}
      </div>
    </Layout>
  );
}
