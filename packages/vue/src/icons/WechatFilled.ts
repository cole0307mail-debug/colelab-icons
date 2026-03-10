// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WechatFilledSvg from '@colelab/icons-svg/es/asn/WechatFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WechatFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WechatFilledSvg }, slots);
  },
});
