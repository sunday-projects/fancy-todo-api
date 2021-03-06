import { Types } from 'mongoose';

// Types
import { Validation } from '@/types';
import { IUserValidator } from '@/types/user';

class UserValidator implements IUserValidator {
  public Id(input: string): Validation {
    if (!input) {
      return {
        error: true,
        text: 'ID cannot be empty!',
      };
    } else if (!Types.ObjectId.isValid(input)) {
      return {
        error: true,
        text: 'Invalid ID!',
      };
    }

    return {
      error: false,
      text: '',
    };
  }

  public Name(input: string): Validation {
    if (!input) {
      return {
        error: true,
        text: 'Name cannot be empty!',
      };
    }

    return {
      error: false,
      text: '',
    };
  }

  public Email(input: string): Validation {
    if (!input) {
      return {
        error: true,
        text: 'Email cannot be empty!',
      };
    } else if (input && !/.+@.+\..+/.test(input)) {
      return {
        error: true,
        text: 'Invalid email address!',
      };
    }

    return {
      error: false,
      text: '',
    };
  }

  public Password(input: string): Validation {
    if (!input) {
      return {
        error: true,
        text: 'Password is required!',
      };
    } else if (input.length < 6) {
      return {
        error: true,
        text: 'Password must be at least 6 characters!',
      };
    }

    return {
      error: false,
      text: '',
    };
  }
}

export default new UserValidator();
