/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

// import Header from "components/Headers/Header.js";

const Dashboard = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Container className="mt--7" fluid>
        <Row>
          <Col>
            <Row>
              <Col className="mb-5 mb-xl-0" xl="8">
                <Card className="bg-gradient-default shadow">
                  <CardHeader className="bg-transparent">
                    <Row className="align-items-center">
                      <div className="col">
                        <h2 className="text-white mb-0">Major Progress</h2>
                      </div>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    {/* Chart */}
                    <div className="chart">
                      <Line
                        data={chartExample1[chartExample1Data]}
                        options={chartExample1.options}
                        getDatasetAtEvent={(e) => console.log(e)}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="4">
                <Card className="shadow">
                  <CardHeader className="bg-transparent">
                    <Row className="align-items-center">
                      <div className="col">
                        {/* <h6 className="text-uppercase text-muted ls-1 mb-1">
                          Performance
                        </h6> */}
                        <h2 className="mb-0">Courses Wishlist</h2>
                      </div>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    {/* Chart */}
                    <div className="chart">
                      <Bar
                        data={chartExample2.data}
                        options={chartExample2.options}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col className="mb-5 mb-xl-0" xl="8">
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <Row className="align-items-center">
                      <div className="col">
                        <h3 className="mb-0">Recommended Courses</h3>
                      </div>
                    </Row>
                  </CardHeader>
                  <Table
                    style={{ height: 20 }}
                    className="align-items-center table-flush"
                    responsive
                  >
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Course ID</th>
                        <th scope="col">Course Name</th>
                        <th scope="col">Credit Hours</th>
                        <th scope="col">Average GPA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">CS 498</th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">ME 180</th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">CS 242</th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">ECE 374</th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">ECE 445</th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </Col>
              <Col xl="4">
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <Row className="align-items-center">
                      <div className="col">
                        <h3 className="mb-0">Courses Taken</h3>
                      </div>
                    </Row>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Referral</th>
                        <th scope="col">Visitors</th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Facebook</th>
                        <td>1,480</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">60%</span>
                            <div>
                              <Progress
                                max="100"
                                value="60"
                                barClassName="bg-gradient-danger"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Facebook</th>
                        <td>5,480</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">70%</span>
                            <div>
                              <Progress
                                max="100"
                                value="70"
                                barClassName="bg-gradient-success"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Google</th>
                        <td>4,807</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">80%</span>
                            <div>
                              <Progress max="100" value="80" />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Instagram</th>
                        <td>3,678</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">75%</span>
                            <div>
                              <Progress
                                max="100"
                                value="75"
                                barClassName="bg-gradient-info"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">twitter</th>
                        <td>2,645</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">30%</span>
                            <div>
                              <Progress
                                max="100"
                                value="30"
                                barClassName="bg-gradient-warning"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;