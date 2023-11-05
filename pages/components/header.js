import Image from "next/image";
export default function Header() {
    return (
      <main>
      <aside className="sidebar-wrapper" data-simplebar="true">
        <div className="sidebar-header">
          <div>
          </div>
          <div>
            <h5 className="logo-text">Happy Code</h5>
          </div>
        </div>
        <ul className="metismenu" id="menu">
          <li>
            <a href="index.html">
              <div className="parent-icon">
                <ion-icon name="home-outline"></ion-icon>
              </div>
              <div className="menu-title">Dashboard</div>
            </a>
          </li>
        </ul>
      </aside>
      <header className="top-header">
        <nav className="navbar navbar-expand gap-3">
          <div className="toggle-icon">
            <ion-icon name="menu-outline"></ion-icon>
          </div>
         
          <form className="searchbar">
            <div className="position-absolute top-50 translate-middle-y search-icon ms-3">
              <ion-icon name="search-outline"></ion-icon>
            </div>
            <input className="form-control" type="text" placeholder="Search for anything" />
            <div className="position-absolute top-50 translate-middle-y search-close-icon">
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </form>
          <div className="top-navbar-right ms-auto">
  
            <ul className="navbar-nav align-items-center">
            <li className="nav-item dropdown dropdown-user-setting">
              <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown">
                <div className="user-setting">
                  <Image src="/favicon.ico" width={30} height={30} alt="favicon" />
              </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="d-flex flex-row align-items-center gap-2">
                      <Image src="/favicon.ico" width={25} height={25} alt="favicon" className="rounded-circle" />
                      <div className="">
                        <h6 className="mb-0 dropdown-user-name">Jhon Deo</h6>
                        <small className="mb-0 dropdown-user-designation text-secondary">UI Developer</small>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="login">
                    <div className="d-flex align-items-center">
                      <div className="">
                        <ion-icon name="log-out-outline"></ion-icon>
                      </div>
                      <div className="ms-3"><span>Logout</span></div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            </ul>
  
          </div>
        </nav>
      </header>
      </main>
    );
  }
  