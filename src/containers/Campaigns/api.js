import FetchAPI from '../../api';

export const getCampagins = () => FetchAPI('campaigns', 'GET');
