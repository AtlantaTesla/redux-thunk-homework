import React, { ChangeEvent, Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { connect } from 'react-redux';
import { changeCountry, uploadList } from '../../redux/actions';

interface IOwnProps {}

interface IState {}

interface IStateProps {
    country: string;
}

interface IDispatchProps {
    changeCountry: typeof changeCountry;
    uploadList: any;
}

type TProps = IOwnProps & IDispatchProps & IStateProps;

class Filter extends Component<TProps, IState> {
    list = [
        { label: 'России', value: 'RU' },
        { label: 'Бурунди', value: 'BI' },
        { label: 'Габоне', value: 'GA' },
        { label: 'Индии', value: 'IN' },
        { label: 'США', value: 'US' },
        { label: 'Японии', value: 'JP' },
    ];

    handleChange = (_e: ChangeEvent<HTMLInputElement>, country: string) => {
        const { changeCountry, uploadList } = this.props;
        changeCountry(country);
        uploadList(country);
    };

    render() {
        const { country } = this.props;

        return (
            <>
                <FormControl component="fieldset">
                    <FormLabel component="legend">
                        Самые популярные видео в{' '}
                    </FormLabel>
                    <RadioGroup
                        aria-label="country"
                        name="country"
                        value={country}
                        onChange={this.handleChange}
                    >
                        {this.list.map(item => {
                            return (
                                <FormControlLabel
                                    {...item}
                                    control={<Radio />}
                                />
                            );
                        })}
                    </RadioGroup>
                </FormControl>
            </>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        country: state.filter.country,
    };
};

const mapDispatchToProps = { changeCountry, uploadList };

export default connect<IStateProps, IDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(Filter);
