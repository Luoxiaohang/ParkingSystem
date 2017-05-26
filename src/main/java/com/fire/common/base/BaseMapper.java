package com.fire.common.base;

import java.util.List;

public interface BaseMapper<T> {

	public int insert(T t) throws Exception;

	public int update(T t) throws Exception;

	public void updateBySelective(T t) throws Exception;

	public void delete(Integer id) throws Exception;

	public T selectByPrimaryKey(Integer Id) throws Exception;

	public Integer selectByModelCount(BaseModel map) throws Exception;

	public List<T> selectByModel(BaseModel model) throws Exception;

}
