import React, { Component } from 'react';
import Item from '../Item';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

interface IOwnProps {}

interface IState {}

interface IStateProps {
    loading: boolean;
    data: any[];
}

interface IDispatchProps {}

type TProps = IOwnProps & IDispatchProps & IStateProps;

class List extends Component<TProps, IState> {
    render() {
        const { loading, data } = this.props;
        return (
            <>
                <div className="list">
                    {data.map(item => {
                        return <Item {...item} />;
                    })}
                </div>
                {loading && (
                    <div>
                        <CircularProgress color="secondary" />
                    </div>
                )}
            </>
        );
    }
}

const mapStateToProps = (state: any) => {
    const { loading, data } = state.list;
    return {
        loading,
        data,
    };
};

const mapDispatchToProps = {};

export default connect<IStateProps, IDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(List);
