import { getApiWithoutToken } from "./api-interface";

export const tableData = (sdate= "start date" , edate= "endDate") => {
	return getApiWithoutToken(`/search/shows?q=${search}`);
		// return getApiWithoutToken(`/v3/dummy/report?startDate=${sdate} &endDate=${edate}`);
}