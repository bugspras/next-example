
export default function Main() {
    return (
        <div className="page-content-wrapper">
          <div className="page-content">
    
            <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
              <div className="breadcrumb-title pe-3">Dashboard</div>
              <div className="ps-3">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0 p-0 align-items-center">
                    <li className="breadcrumb-item"><a href="#">
                        <ion-icon name="home-outline"></ion-icon>
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">eCommerce</li>
                  </ol>
                </nav>
              </div>
              <div className="ms-auto">
                <div className="btn-group">
                  <button type="button" className="btn btn-outline-primary">Settings</button>
                  <button type="button"
                    className="btn btn-outline-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"> <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end"> <a className="dropdown-item"
                      href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider"></div> <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
              </div>
            </div>
    
    
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-4">
              <div className="col">
                <div className="card radius-10">
                  <div className="card-body">
                    <div className="d-flex align-items-start gap-2">
                      <div>
                        <p className="mb-0 fs-6">Total Revenue</p>
                      </div>
                      <div className="ms-auto widget-icon-small text-white bg-gradient-purple">
                        <ion-icon name="wallet-outline"></ion-icon>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                      <div>
                        <h4 className="mb-0">$92,854</h4>
                      </div>
                      <div className="ms-auto">+6.32%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card radius-10">
                  <div className="card-body">
                    <div className="d-flex align-items-start gap-2">
                      <div>
                        <p className="mb-0 fs-6">Total Customer</p>
                      </div>
                      <div className="ms-auto widget-icon-small text-white bg-gradient-info">
                        <ion-icon name="people-outline"></ion-icon>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                      <div>
                        <h4 className="mb-0">48,789</h4>
                      </div>
                      <div className="ms-auto">+12.45%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card radius-10">
                  <div className="card-body">
                    <div className="d-flex align-items-start gap-2">
                      <div>
                        <p className="mb-0 fs-6">Total Orders</p>
                      </div>
                      <div className="ms-auto widget-icon-small text-white bg-gradient-danger">
                        <ion-icon name="bag-handle-outline"></ion-icon>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                      <div>
                        <h4 className="mb-0">88,234</h4>
                      </div>
                      <div className="ms-auto">+3.12%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card radius-10">
                  <div className="card-body">
                    <div className="d-flex align-items-start gap-2">
                      <div>
                        <p className="mb-0 fs-6">Conversion Rate</p>
                      </div>
                      <div className="ms-auto widget-icon-small text-white bg-gradient-success">
                        <ion-icon name="bar-chart-outline"></ion-icon>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                      <div>
                        <h4 className="mb-0">48.76%</h4>
                      </div>
                      <div className="ms-auto">+8.52%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }