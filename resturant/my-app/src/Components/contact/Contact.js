import React, { Suspense } from "react";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./Contact.css";

export default function Contact() {
  // const [dark, setDark] = useState(false);

  // useEffect(() => {}, [dark]);

  const Map = React.lazy(() => import("./Map"));

  return (
    <div className="page  contact m-0 ">
      <section className="number1">
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
      <div>
        <div className="container content pt-5">
          <h1 className="head mb-4">Contact </h1>
          <div className="d-flex flex-lg-row flex-column">
            <div className="col-lg-4 col-12 meform">
              <div className="pe-2">
                {/* <form className="row g-3 algin-items-between">
                  <div className="col--12">
                    <label htmlFor="inputEmail4" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                      Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">
                      Message
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="tell me about you..."
                    />
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-dark d-block w-100"
                    >
                      Send
                    </button>
                  </div>
                </form> */}
                <div className="location">
                  <GoLocation /> : 35759 Driedorf
                </div>
                <div className="tele">
                  <BsFillTelephoneFill />: 555555555
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12 mt-lg-0 mt-5 map">
              <div className="ps-2 h-100">
                <Suspense fallback={<div>Loading...</div>}>{<Map />}</Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
