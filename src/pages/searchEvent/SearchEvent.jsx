import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './assets/searchevent.scss';
import { Pagination } from 'react-bootstrap';
import { getEventList } from '../../store/actions/event';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useParams } from 'react-router-dom';
import { getEventSearch } from '../../store/actions/event';

export default function SearchEvent() {
  const { keyword } = useParams();
  console.log(keyword);
  const searchResult = useSelector((state) => state);
  console.log('searchResult', searchResult.searchEvent);
  const dispatch = useDispatch();
  useEffect(() => {
    if (keyword) {
      dispatch(getEventSearch(keyword));
    }
  }, [keyword]);
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
        <div className='row row-cols-1 row-cols-md-4 g-4'>
          {searchResult?.searchEvent?.loading
            ? 'Loading.....'
            : searchResult?.searchEvent?.search?.map((item, index) => {
                return (
                  <div className='col'>
                    <a href='#'>
                      <div className='card h-100' key={index}>
                        <img
                          src={item.event_photo}
                          alt='{item.event_title}'
                          className='card-img-top img-fluid'
                        />
                        <div className='card-body'>
                          <h5 className='card-title'>{item.category.name}</h5>
                          <p className='date card-text'>{item.date_and_time}</p>
                          <p className='title card-text'>{item.event_title}</p>
                          <p className='host card-text'>{item.user.first_name}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
        </div>
      </div>
      <Pagination className='justify-content-center'>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
}
