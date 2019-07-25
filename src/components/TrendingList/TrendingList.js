import React, {Component} from 'react';
import map from 'lodash/map';

import TrendingItem from "components/TrendingItem/TrendingItem";

import RequestFactory from "../../services/RequestFactory";
import GiphyTrendingGifsRequest from "../../services/requests/GiphyTrendingGifs";
import InfiniteScroll from 'react-infinite-scroller';

import styles from './TrendingList.module.scss';

class TrendingList extends Component {
  responseId;
  state = {
    items: [],
    hasMoreItems: true,
  };

  // componentDidMount() {
  //   RequestFactory.send(
  //     GiphyTrendingGifsRequest,
  //     {
  //       random_id: this.responseId,
  //     }
  //   ).then((res) => {
  //     this.setState({
  //       items: res.data.data,
  //     });
  //     if (!this.responseId) {
  //       this.responseId = res.data.meta.response_id;
  //     }
  //   });
  // }

  loadItems(page) {
    const offset = (page - 1) * 20;
    RequestFactory.send(
      GiphyTrendingGifsRequest,
      {
        random_id: this.responseId,
        offset,
      }
    ).then((res) => {
      const {data, meta, pagination} = res.data;
      const items = [...this.state.items, ...data];
      let hasMoreItems = true;

      if (!this.responseId) {
        this.responseId = meta.response_id;
      }
      if (pagination.local_count <= pagination.count) {
        hasMoreItems = false;
      }

      this.setState({
        items,
        hasMoreItems,
      });
    });
  }

  render() {
    const {items} = this.state;

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadItems.bind(this)}
        hasMore={this.state.hasMoreItems}
        className={styles.container}>
        {map(items, (item) => (
          <TrendingItem data={item} key={item.id}/>
        ))}
      </InfiniteScroll>
    );
  }
}

export default TrendingList;
