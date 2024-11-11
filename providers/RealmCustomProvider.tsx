import { RealmProvider } from '@realm/react';
import { PropsWithChildren } from 'react';
import { Task } from '../models/Task';

const RealmCustomProvider = ({ children }: PropsWithChildren) => {
  return (
    <RealmProvider schema={[Task]}>{children}</RealmProvider>
  );
}

export default RealmCustomProvider;