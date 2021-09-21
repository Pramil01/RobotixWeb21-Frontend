import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
const Submit = ({ questions }) => {
  useEffect(() => {
    document.getElementById("a_step3").classList.add("r_active");
    document.getElementById("a_step1").classList.remove("r_active");
    document.getElementById("a_step2").classList.remove("r_active");
  });

  return (
    <div>
      <Container className="step2">
        <Row>
          <Col xs={12} md={12}>
            <div className="rec_btn_wrap" style={{ textAlign: "left" }}>
              <Link to={"/domain1"}>
                <div className="rec_btn">
                  <i className="fa fa-angle-double-left" aria-hidden="true"></i>{" "}
                  Step 2
                </div>
              </Link>
            </div>

            <div className="submit_form">
              <div className="submit_form_btn">Submit Your Response</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Submit;
