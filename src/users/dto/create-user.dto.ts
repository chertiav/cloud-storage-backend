import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
	@ApiProperty({
		default: 'test@gmail.com',
	})
	email: string;

	@ApiProperty({
		default: 'Mister Credo',
	})
	fullName: string;

	@ApiProperty({
		default: '123',
	})
	password: string;
}
