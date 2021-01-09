import { useContext } from 'react';
import AppContext from 'reducer/App/AppContext';
import { db } from 'utils/Firebase';

function useSongsData() {
  const appContext = useContext(AppContext);
  const { getSongsMethod } = appContext;

  const getSongsData = async () => {
    console.log('Get Songs...');
    db.collection('music').onSnapshot((querySnapshot) => {
      let queryData = [];
      querySnapshot?.forEach((item) => {
        const queryItem = item?.data();
        queryItem.id = item?.id;
        queryData.push(queryItem);
      });
      getSongsMethod(queryData);
    });
  };

  return [getSongsData];
}

export default useSongsData;
