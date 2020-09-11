import FetchAPI from '../../api';

export const getCharts = () => FetchAPI('overview', 'GET');
