import { CanActivateFn } from '@angular/router';

export const authformGuard: CanActivateFn = (route, state) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  if ( !user   || user.user.id !== 1) { 
    alert("Ban khong co quyen truy cap vao trang nay");
    return false;
  }
  return true;
};
