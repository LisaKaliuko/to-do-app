import { useContext } from 'react';
import { rootStoreContext } from '@stores/rootStore';

export const useStore = () => useContext(rootStoreContext);
