import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getTodos from '~main/store/app/actions';
import UserCard from '~components/UserCard';

const Home = ({ dispatchGetTodos, error, loading, todos }) => {
    useEffect(() => {
        dispatchGetTodos();
    }, [dispatchGetTodos]);
    if (error) {
        return <h1>Error</h1>;
    }
    return loading ? (
        <h1>Loading</h1>
    ) : (
        <div>
            {todos.map((user) => (
                <UserCard
                    key={user.id}
                    firstName={user.first_name}
                    lastName={user.last_name}
                    avatar={user.avatar}
                />
            ))}
        </div>
    );
};

const mapStateToProps = ({ app }) => ({
    error: app.error,
    loading: app.loading,
    todos: app.data,
});

const mapDispatchToProps = (dispatch) => ({ dispatchGetTodos: () => dispatch(getTodos()) });

Home.defaultProps = {
    dispatchGetTodos: null,
    loading: false,
    error: null,
    todos: [],
};

Home.propTypes = {
    dispatchGetTodos: PropTypes.func,
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.any, PropTypes.object]),
    todos: PropTypes.oneOfType([PropTypes.any, PropTypes.array]),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
