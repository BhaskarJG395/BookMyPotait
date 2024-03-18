package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.dto.UserDto;
import com.app.entities.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDao userDao;
	@Autowired
	private EmailSender mailsender;

	@Autowired
	private ModelMapper mapper;

	@Override
	public UserDto addUser(UserDto userdto) {
		User user = mapper.map(userdto, User.class);
		userDao.save(user);
		String body = "Hello "+user.getFirstName()+" Welcome to eKala";
		String status = mailsender.sendEmail(user.getEmail(),"User Registration Successful",body);
		System.out.println(status);
		return mapper.map(user, UserDto.class);
	}
}
