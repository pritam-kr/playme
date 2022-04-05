import moment from "moment";

export const timeAgoFormatter = (date) => moment(date).fromNow()