import { useEffect } from 'react';
import './assets/searchevent.scss';
// import event1 from './assets/event1.jpg';
// import event3 from './assets/event3.jpg';
// import event4 from './assets/event4.jpg';
// import event5 from './assets/mini-project.jpg';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { getEvents } from '../../store/actions/event';
import { getEventList } from '../../store/actions/event';

export default function SearchEvent() {
  const relative = dayjs.extend(relativeTime);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventList(id));
  }, [dispatch, id]);
  const { details, loading } = useSelector((state) => state.event.detailEvent);
  console.log(details);
  return (
    <div className='searchevent'>
      <h3>Showing 68 Result for "How to"</h3>
      <div className='search-filter'>
        <select
          className='form-select form-select-lg mb-3'
          aria-label='.form-select-lg'
          label='Filter By Date'
        >
          <option selected>Filter By Date</option>
          <option value='1'>Today</option>
          <option value='2'>Tomorrow</option>
          <option value='3'>This Week</option>
          <option value='4'>This Month</option>
          <option value='5'>This Year</option>
          <option value='6'>All Time</option>
        </select>
        <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg '>
          <option selected>Filter By Category</option>
          <option value='1'>Photography</option>
          <option value='2'>Design</option>
          <option value='3'>Development</option>
          <option value='3'>Marketing</option>
          <option value='3'>Business</option>
          <option value='3'>Lifestyle</option>
          <option value='3'>Music</option>
        </select>
        <select className='form-select form-select-lg mb-3' aria-label='.form-select-lg '>
          <option selected>Sorting By</option>
          <option value='1'>Date</option>
          <option value='2'>Name</option>
        </select>
      </div>
      <div className='search-result'>
        {loading ? (
          'loading...'
        ) : (
          <div className='row row-cols-1 row-cols-md-4 g-4'>
            <div className='col'>
              <a href='#'>
                <div className='card h-100'>
                  <img
                    src={details.event_photo}
                    alt={details.event_title}
                    className='card-img-top img-fluid'
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>{details.category_name}</h5>
                    <p className='date card-text'>
                      {relative(dayjs(details.date_and_time).format('YYYY/MM/DD')).fromNow()}
                    </p>
                    <p className='title card-text'>{details.event_title}</p>
                    <p className='host card-text'>By Ernest</p>
                  </div>
                </div>
              </a>
            </div>
            {/* <div className='col'>
            <a href='#'>
              <div className='card h-100'>
                <img src={event4} className='card-img-top img-fluid' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>Design</h5>
                  <p className='date card-text'>SUN, OCT 24 @ 1:15 AM ICT</p>
                  <p className='title card-text'>How to create a design system</p>
                  <p className='host card-text'>By Agung Dwi Putra</p>
                </div>
              </div>
            </a>
          </div>
          <div className='col'>
            <a href='#'>
              <div className='card h-100'>
                <img src={event1} className='card-img-top img-fluid' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>Business</h5>
                  <p className='date card-text'>SUN, OCT 24 @ 1:15 AM ICT</p>
                  <p className='title card-text'>
                    How to make your business growth 10 times within 1 year
                  </p>
                  <p className='host card-text'>By Adit nento</p>
                </div>
              </div>
            </a>
          </div>
          <div className='col'>
            <a href='#'>
              <div className='card h-100'>
                <img src={event4} className='card-img-top img-fluid' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>Design</h5>
                  <p className='date card-text'>SUN, OCT 24 @ 1:15 AM ICT</p>
                  <p className='title card-text'>How to create a design system</p>
                  <p className='host card-text'>By Agung Dwi Putra</p>
                </div>
              </div>
            </a>
          </div>
          <div className='col'>
            <a href='#'>
              <div className='card h-100'>
                <img src={event3} className='card-img-top img-fluid' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>Marketing</h5>
                  <p className='date card-text'>SUN, OCT 24 @ 1:15 AM ICT</p>
                  <p className='title card-text'>Google Ads 101 with the best marketing agency</p>
                  <p className='host card-text'>By Budi Setiawan</p>
                </div>
              </div>
            </a>
          </div>
          <div className='col'>
            <a href='#'>
              <div className='card h-100'>
                <img src={event5} className='card-img-top img-fluid' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>Design</h5>
                  <p className='date card-text'>SUN, OCT 24 @ 1:15 AM ICT</p>
                  <p className='title card-text'>Hitting Reset: How to Land A Job in UX Design</p>
                  <p className='host card-text'>By Ernest</p>
                </div>
              </div>
            </a>
          </div>
          <div className='col'>
            <a href='#'>
              <div className='card h-100'>
                <img src={event4} className='card-img-top img-fluid' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>Design</h5>
                  <p className='date card-text'>SUN, OCT 24 @ 1:15 AM ICT</p>
                  <p className='title card-text'>How to create a design system</p>
                  <p className='host card-text'>By Agung Dwi Putra</p>
                </div>
              </div>
            </a>
          </div>
          <div className='col'>
            <a href='#'>
              <div className='card h-100'>
                <img src={event3} className='card-img-top img-fluid' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>Marketing</h5>
                  <p className='date card-text'>SUN, OCT 24 @ 1:15 AM ICT</p>
                  <p className='title card-text'>Google Ads 101 with the best marketing agency</p>
                  <p className='host card-text'>By Budi Setiawan</p>
                </div>
              </div>
            </a>
          </div> */}
          </div>
        )}
      </div>
      <nav aria-label='Page navigation '>
        <ul className='pagination justify-content-center'>
          <li className='page-item disabled'>
            <a className='page-link'>&lt;</a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              1
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              2
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              3
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              4
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              5
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              ...
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              10
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              &gt;
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
