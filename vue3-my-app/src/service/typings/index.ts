export interface ResponseResult<T = any> {
	code: number;
	route?: T;
	message?: string;
}
