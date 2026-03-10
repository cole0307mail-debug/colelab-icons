// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import IotOutlinedSvg from '@colelab/icons-svg/es/asn/IotOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'IotOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: IotOutlinedSvg }, slots);
  },
});
