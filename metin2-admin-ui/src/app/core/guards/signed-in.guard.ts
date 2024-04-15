import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { first, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const signedInGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated$.pipe(
    map((isAuthenticated) => {
      console.log('signedInGuard', isAuthenticated);

      if (isAuthenticated) {
        router.navigate(['/dashboard']);
        return false;
      }
      return true;
    }),
    first()
  );
};
