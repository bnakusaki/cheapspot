import { LogoutOutlined } from '@ant-design/icons';
import { Button, Dropdown, Modal } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import * as authentication_functions from "../../../firebase/firebase-auth";


function Profile ({user}) {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleOk = async()=>{
    setConfirmLoading(true);
    await authentication_functions.signOut()
    .then(()=>{handleCancel});
    setConfirmLoading(false);
  }

  const items = [
    {
      key: '1',
      label: (
        <div onClick={showModal}>
          <LogoutOutlined className="mr-2" />Log out
        </div>
      ),
      danger: true
    },
  ];

    return (
      <>
        <Dropdown menu={{ items }} placement="bottomRight" arrow>
          <Button type="text" className="flex items-center justify-between">
            <div className="text-sm md:text-lg">
                {user.displayName}
            </div>
            {
              user.photoURL?
              <div className="h-[25px] w-[25px] max-h-[30px] max-w-[30px] min-h-[20px] min-w-[20px] ml-2">
                    <Image src={user.photoURL} objectFit='cover' className="bg-slate-300 rounded-full" width="30" height="30" alt="A user icon behind the sign up text" />
            </div>: null
            }
          </Button>
        </Dropdown>
        <Modal
          title="Log out"
          open={open}
          centered
          onOk={handleOk}
          okText={'Log out'}
          okButtonProps={{danger:true}}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <p>Are you sure you want to log out of CheapSpot</p>
        </Modal>
      </>
    );
}


export default Profile;
