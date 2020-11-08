import React, { Component } from 'react';
import Filter from '../Filter';
import List from '../List';
import Button from '@material-ui/core/Button';
import { uploadMore } from '../../redux/actions';
import { connect } from 'react-redux';

interface IOwnProps {}

interface IState {}

interface IStateProps {
    regionCode: string;
    nextPageToken: string;
}

interface IDispatchProps {
    uploadMore: any;
}

type TProps = IOwnProps & IDispatchProps & IStateProps;

class MyYoutube extends Component<TProps, IState> {
    render() {
        const { uploadMore, regionCode, nextPageToken } = this.props;
        return (
            <div>
                <h2 className="title">Мой youtube</h2>
                <Filter />
                <List />
                <Button
                    onClick={() => {
                        uploadMore(regionCode, nextPageToken);
                    }}
                    variant="contained"
                    color="primary"
                >
                    показать ещё
                </Button>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        regionCode: state.filter.country,
        nextPageToken: state.list.nextPageToken,
    };
};

const mapDispatchToProps = { uploadMore };

export default connect<IStateProps, IDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(MyYoutube);
