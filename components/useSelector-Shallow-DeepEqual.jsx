/**ShallowEquality*/
import { useSelector, shallowEqual } from 'react-redux';

const UserProfile = () => {
  // Without shallowEqual, this object { name, email } is "new" every time,
  // causing a re-render even if name and email stayed the same.
  const { name, email } = useSelector(
    (state) => ({
      name: state.user.name,
      email: state.user.email,
    }),
    shallowEqual // <--- Magic happens here
  );

  return <div>{name} ({email})</div>;
};


/**DeepEqualityCheck*/
import { useSelector } from 'react-redux';
import isEqual from 'lodash/isEqual'; // Common library for deep checks

const Settings = () => {
  const complexSettings = useSelector(
    (state) => state.settings.advanced, // returns a nested object
    isEqual // <--- Deeply compares every nested property
  );

  return <pre>{JSON.stringify(complexSettings)}</pre>;
};
