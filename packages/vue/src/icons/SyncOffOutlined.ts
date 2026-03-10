// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SyncOffOutlinedSvg from '@colelab/icons-svg/es/asn/SyncOffOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SyncOffOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SyncOffOutlinedSvg }, slots);
  },
});
