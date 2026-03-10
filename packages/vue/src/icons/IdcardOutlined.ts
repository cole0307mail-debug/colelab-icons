// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import IdcardOutlinedSvg from '@colelab/icons-svg/es/asn/IdcardOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'IdcardOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: IdcardOutlinedSvg }, slots);
  },
});
