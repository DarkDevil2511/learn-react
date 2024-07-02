import { Blockquote } from '@mantine/core';
import { RiInformationLine } from '@remixicon/react'
import React from 'react';

interface Props {
    children?: React.ReactNode,
	  innerText?: string,
	  text?: string,
	  className?: string
} 

const AppBlockQuotes: React.FC<Props> = ({ children, innerText, text, className }) => {
    // const icon = <IconInfoCircle />;
    return (
      <Blockquote
			className={className + ' text-green-700 font-semibold text-sm'}
			style={{ paddingLeft: 15 }}
			iconSize={30}
			icon={<RiInformationLine />}
			mt="xl"
		>
			{children}
			{innerText && <div dangerouslySetInnerHTML={{ __html: innerText }} />}
			{text}
		</Blockquote>
    );
  }

export default AppBlockQuotes