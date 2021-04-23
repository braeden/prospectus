import Axios from 'axios';

import { Card, CardTitle, Badge, CardText } from 'reactstrap';

function truncate(str, n) {
  if (str !== undefined)
    return str.length > n ? str.substr(0, n - 1) + '...' : str;
}

const SearchResult = (props) => {
  const username = 'ajackson1';

  const AddCourseToWishlist = (courseid) => {
    console.log(courseid);
    console.log(username);
    Axios.post('http://localhost:3001/user/wishlist', {
      userid: username,
      courseid: courseid,
    }).then(
      (response) => {
        if (response.data.status === 400) {
          window.alert(
            `This course with courseid "${courseid}" is already in your wishlist`
          );
        } else {
          console.log(response.data);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const View = (courseid) => {
    props.setCourse(courseid);
  };

  return (
    <Card body style={{ margin: 5 }}>
      <CardTitle tag="h5" style={{ paddingLeft: 10 }}>
        <div className="row mr--4">
          <Badge
            style={{
              marginTop: 'auto',
              marginBottom: 'auto',
              backgroundColor: '#FB6340',
            }}
            color="warning"
          >
            <h5
              style={{
                marginTop: 'auto',
                marginBottom: 'auto',
                color: 'white',
                fontWeight: 800,
              }}
            >
              {props.courseid}
            </h5>
          </Badge>
          <div className="col">
            <button
              value={props.courseid}
              type="button"
              className="btn btn-sm btn-info float-right"
              onClick={(e) => View(e.target.value)}
            >
              View
            </button>
            <button
              value={props.courseid}
              type="button"
              className="btn btn-sm btn-success float-right mr-2"
              onClick={(e) => AddCourseToWishlist(e.target.value)}
            >
              + Wishlist
            </button>
          </div>
        </div>
        <div className="row mr--4">
          <h4 style={{ marginBottom: 'auto' }} className="ml-1 mt-3">
            <div>
              <strong>{truncate(props.coursename, 50)}</strong>
            </div>
          </h4>
          <div className="col align-self-center"></div>
        </div>
      </CardTitle>
      <CardText className="mt--2 mb--1" style={{ fontSize: 15 }}>
        {truncate(props.description, 200)}
      </CardText>
    </Card>
  );
};

export default SearchResult;