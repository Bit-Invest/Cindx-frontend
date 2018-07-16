import React from 'react';
import { Button } from '@components/common/Button';
import { Select } from '@registration/select';
import { Input } from '@registration/input';
import { TextArea } from '@common/TextArea';

const ROOT_CLASS = 'pop-up-new-product';

export const PopUpNewProduct = (props) => {
  return (
    <form className={ROOT_CLASS} onSubmit={props.handleSubmit}>
      <div className={`${ROOT_CLASS}__tittle`}>New Product</div>
      <Select
        onChange={props.handleSelectChange}
        options={[
          {value: 'binance', label: 'Binance'}
        ]}
        theme="new-product"
      />
      <Input
        onChange={props.handleAPIChange}
        placeholder="API Key"
        type="text"
        theme="input-new-product"
        required
      />
      <Input
        onChange={props.handleSecretKeyChange}
        placeholder="secret key"
        type="text"
        theme="input-new-product"
        required
      />
      <div className={`${ROOT_CLASS}__textarea ${props.role !== 'trader' ? ROOT_CLASS + '__textarea_hidden' : ''}`}>
        <TextArea
          onChange={props.handleAreaChange}
          areaProps={{
            placeholder: 'Description of your strategy min 500 characters'
          }}
        />
      </div>
      <Button
        className={`${ROOT_CLASS}__button`}
        theme="pop-up-new-product"
        NameBtn="Add Product"
      />
      <div className={`${ROOT_CLASS}__key`}>
        Where to get API Key?
      </div>
    </form>
  );
};
