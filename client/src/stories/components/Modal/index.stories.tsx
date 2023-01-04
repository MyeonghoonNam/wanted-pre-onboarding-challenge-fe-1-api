import { Modal } from '@components/index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: { onClick: { action: 'go to login Page' } },
};

export const Auth = () => {
  return (
    <Modal>
      <div className="flex h-1/4 p-4 border-b">
        <h3 className="text-xl font-semibold text-gray-900">사용자 미인증</h3>
      </div>

      <div className="flex justify-center items-center h-2/4 p-6 space-y-6">
        <span>로그인 후 이용해주세요.</span>
      </div>

      <div className="absolute bottom-0 flex justify-center items-center w-full h-1/4 p-3 border-t border-gray-200 rounded-b">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600"
          onClick={action('go to login page')}
        >
          로그인
        </button>
      </div>
    </Modal>
  );
};
